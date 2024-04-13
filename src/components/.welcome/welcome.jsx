import Header from "./header.jsx";
import {Canvas, useFrame, useThree, useLoader, extend} from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Suspense, useEffect, useMemo, useRef} from "react";
import * as THREE from "three";
import { Water } from 'three-stdlib'
import {OrbitControls, Sky} from "@react-three/drei";
extend({ Water })
import biglogo from "../../assets/biglogo.svg";
export default function Welcome() {
    function Ocean() {
        const ref = useRef()
        const gl = useThree((state) => state.gl)
        const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
        waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
        const geom = useMemo(() => new THREE.PlaneGeometry(200, 200), [])
        const config = useMemo(
            () => ({
                textureWidth: 1024,
                textureHeight: 1024,
                waterNormals,
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 1,
                fog: false,
                format: gl.encoding
            }),
            [waterNormals]
        )
        useFrame((state, delta) => (ref.current.material.uniforms.time.value += 0.001))
        return <water ref={ref} args={[geom, config]} position-y={-1.42} rotation-x={-Math.PI / 2} />
    }
    function Scene() {
        const gltf = useLoader(GLTFLoader, '/Site.gltf')
        gltf.scene.rotation.y = -0.02;
        gltf.scene.position.y = -2.1;
        gltf.scene.position.z = -6;
        const prevMouseX = useRef(0);
        useEffect(() => {
            const handleMouseMove = (event) => {
                const deltaX = event.clientX - prevMouseX.current;
                prevMouseX.current = event.clientX;
                const rotationSpeed = 0.00005;
                gltf.scene.rotation.y += deltaX * rotationSpeed;
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, [gltf.scene.rotation.y]);
        return <primitive object={gltf.scene} />
    }
    return (
        <div className={"bg-[#E9E9E9] h-[800px] relative"}>
            <Header/>
            <div className={"absolute z-10 inset-x-0 bottom-2 flex h-full justify-center items-center"}>
                <img src={biglogo} draggable={"false"} alt="Q'yh Studio"/>
            </div>
            <Canvas camera={{fov: 26, near: 1, far: 20000}}>
                <ambientLight intensity={1}/>
                <directionalLight color="red" position={[0, 0, 5]}/>
                <Suspense fallback={null}>
                    <Ocean/>
                    <Scene/>
                </Suspense>
                {/*<OrbitControls/>*/}
                <Sky scale={1000} sunPosition={[200, 150, 1000]} turbidity={0.1}/>
            </Canvas>
        </div>
    );
}
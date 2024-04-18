import Header from "./header.jsx";
import {Canvas, useThree, useLoader, useFrame} from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import {Suspense, useEffect, useRef} from "react";
import {OrbitControls, Sky} from "@react-three/drei";
import biglogo from "../../assets/biglogo.svg";
import WaterSurfaceComplex from "../../WaterSurface/WaterSurfaceComplex.tsx";
import FluidFX from "../../WaterSurface/InteractiveFX/FluidFX.tsx";
export default function Welcome() {
    function Scene() {
        const gltf = useLoader(GLTFLoader, '/site2.gltf');
        const camera = useThree((state) => state.camera)
        gltf.scene.rotation.y = 0;
        gltf.scene.position.y = -2.1;
        gltf.scene.position.z = -6;
        const prevMouseX = useRef(0);
        useEffect(() => {
            const handleMouseMove = (event) => {
                if (prevMouseX.current === 0) {
                    prevMouseX.current = event.clientX; // Инициализируем при первом движении
                } else {
                    const deltaX = event.clientX - prevMouseX.current;
                    prevMouseX.current = event.clientX;
                    const rotationSpeed = 0.00001;
                    camera.rotation.y -= deltaX * rotationSpeed;
                }
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, [gltf.scene.rotation.y]);
        return <primitive object={gltf.scene} />
    }

    function Sun() {
        const gltf = useLoader(GLTFLoader, '/sun.gltf');

        gltf.scene.position.y = -11.3;
        gltf.scene.position.z = -6;

        return (
            <>
                <primitive object={gltf.scene}/>
                <EffectComposer>
                    <Bloom
                        intensity={0.5} // Интенсивность свечения
                        kernelSize={2} // Размер ядра свечения для более мягкого эффекта
                        luminanceThreshold={0.1}
                        luminanceSmoothing={2}
                        height={100}

                    />
                </EffectComposer>
            </>
        );
    }

    return (
        <div className={"bg-[#E9E9E9] h-[600px] md:h-[800px] relative"}>
        <Header/>
            <img className={"absolute z-10 inset-0 m-auto"} src={biglogo} draggable={"false"} alt="Q'yh Studio"/>
            <Canvas camera={{fov: 26, near: 1, far: 20000}}>
                <ambientLight intensity={1.2}/>
                <pointLight position={[10, 10, 10]} intensity={1}/>
                <Suspense fallback={null}>
                    <Scene/>
                    <Sun/>
                    <WaterSurfaceComplex
                        position={[0,-1.1,-6]}
                        width={4.36}
                        length={4.34}
                        flowSpeed={0.1}
                        scale={10}
                        fxDisplayColorAlpha={0}
                        color={"#a9c3d3"}
                        radius={2.5}
                    >
                    </WaterSurfaceComplex>
                    <WaterSurfaceComplex
                        position={[0,-1.43,0]}
                        fxDisplayColorAlpha={0}
                        color={"#a9c3d3"}
                        reflectivity={1.2}
                    >
                        <FluidFX
                            splatRadius={0.000002}
                            curlStrength={7}
                            densityDissipation={0.98}
                            velocityDissipation={0.99}
                            velocityAcceleration={20}
                            pressureIterations={2}
                            pressureDissipation={0.5}
                        />
                    </WaterSurfaceComplex>
                </Suspense>
                {/*<OrbitControls/>*/}
                <Sky scale={1000} sunPosition={[3000, 4000, 0]} turbidity={100}/>
            </Canvas>
        </div>
    );
}
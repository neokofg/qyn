import ShowcaseImage from "../../ui/showcase_image.jsx";
import img from "../../assets/projects/img.png";
import img1 from "../../assets/projects/img_1.png";
import img2 from "../../assets/projects/img_2.png";

export default function ServiceExamples() {
    return (
        <div className={"mt-20"}>
            <h2 className={"px-5 md:px-0 container mx-auto text-[32px] md:text-[80px]"}>Примеры работ</h2>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-3"}>
                <ShowcaseImage title={"GS Project"} type={"Моб.приложение"}
                               text={"Концепция, дизайн, разработка, продвижение, 3D, запуск MVP"} img={img}
                               alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img1} alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img2} alt={1}/>
            </div>
        </div>
    );
}
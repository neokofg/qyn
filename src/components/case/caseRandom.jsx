import img from "../../assets/projects/img.png";
import ShowcaseImage from "../../ui/showcase_image.jsx";
import img1 from "../../assets/projects/img_1.png";
import img2 from "../../assets/projects/img_2.png";

export default function CaseRandom() {
    return (
        <div className={"grid gap-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[3000px]:grid-cols-5"}>
            <ShowcaseImage title={"GS Project"} type={"Моб.приложение"}
                           text={"Концепция, дизайн, разработка, продвижение, 3D, запуск MVP"} img={img}
                           alt={1}/>
            <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                           text={"Стратегия развития, контент, SMM продвижение"} img={img1} alt={1}/>
            <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                           text={"Стратегия развития, контент, SMM продвижение"} img={img2} alt={1}/>
        </div>
    );
}
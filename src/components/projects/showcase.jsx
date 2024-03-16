import ShowcaseImage from "../../ui/showcase_image.jsx";
import img from "../../assets/projects/img.png";
import img1 from "../../assets/projects/img_1.png";
import img2 from "../../assets/projects/img_2.png";
import img3 from "../../assets/projects/img_3.png";
import Advert from "./advert.jsx";

export default function Showcase() {
    return (
        <div className={"grid gap-0 grid-cols-2 md:grid-cols-2 xl:grid-cols-3 min-[3000px]:grid-cols-5"}>
            <ShowcaseImage img={img} alt={1} />
            <ShowcaseImage img={img1} alt={1} />
            <ShowcaseImage img={img2} alt={1} />
            <Advert heading={"Разработка и дизайн онлайн-сервисов №1 в Якутии."} text={"мы знаем свое дело"}/>
            <ShowcaseImage img={img2} alt={1} />
            <ShowcaseImage img={img2} alt={1} />
            <ShowcaseImage img={img} alt={1} />
            <ShowcaseImage img={img3} alt={1} />
            <ShowcaseImage img={img3} alt={1} />
            <ShowcaseImage img={img2} alt={1} />
            <ShowcaseImage img={img} alt={1} />
            <ShowcaseImage img={img2} alt={1} />
            <Advert heading={"Вам нужно к нам, если хотите деняк, бегооом"} text={"мы знаем свое дело"}/>
        </div>
    );
}
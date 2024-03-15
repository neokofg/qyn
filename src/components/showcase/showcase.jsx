import ShowcaseImage from "../../ui/showcase_image.jsx";
import img from "../../assets/showcase/img.png";
import img1 from "../../assets/showcase/img_1.png";
import img2 from "../../assets/showcase/img_2.png";
import img3 from "../../assets/showcase/img_3.png";
import Advert from "./advert.jsx";

export default function Showcase() {
    return (
        <div className={"grid grid-cols-3 gap-0"}>
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
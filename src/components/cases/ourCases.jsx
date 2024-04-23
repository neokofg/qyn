import ShowcaseImage from "../../ui/showcase_image.jsx";
import img from "../../assets/projects/img.png";
import img1 from "../../assets/projects/img_1.png";
import img2 from "../../assets/projects/img_2.png";
import Advert from "../projects/advert.jsx";
import img3 from "../../assets/projects/img_3.png";
import React, {useState} from "react";
import items from '../../assets/categories.js';

export default function OurCases() {

    function Radio() {
        const [selectedRadio, setSelectedRadio] = useState('all');

        return (
            <div className={"container mx-auto bg-[#F5F5F5] p-5 text-lg"}>
                <div className={"flex flex-wrap gap-2"}>
                    <input
                        required
                        checked={selectedRadio === '100'}
                        className="hidden radio-custom"
                        type="radio"
                        id={"all"}
                        name="budget[]"
                        onChange={() => setSelectedRadio("all")}
                    />
                    <label
                        htmlFor={"all"}
                        className={`bg-white border-none rounded-[36px] py-2 px-4 ${
                            selectedRadio === "all" ? '!bg-[#BEC2BB] text-white' : ''
                        }`}
                    >
                        {"Все кейсы"}
                    </label>
                    {items.map((value) => (
                        <React.Fragment key={value.key}>
                            <input
                                required
                                checked={selectedRadio === '100'}
                                className="hidden radio-custom"
                                type="radio"
                                id={value.key}
                                name="budget[]"
                                onChange={() => setSelectedRadio(value.key)}
                            />
                            <label
                                htmlFor={value.key}
                                className={`bg-white border-none rounded-[36px] py-2 px-3 ${
                                    selectedRadio === value.key ? '!bg-[#BEC2BB] text-white' : ''
                                }`}
                            >
                                {value.name}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
                <select required className={"w-full md:w-1/5 py-3 mt-5 bg-[#F5F5F5] !border-b-[#EAEAEA] !border-b"}
                        style={{border: "1px solid white"}}>
                    <option>Сфера</option>
                    <option>IT</option>
                </select>
            </div>
        );
    }

    return (
        <div>
            <Radio/>
            <div className={"grid gap-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[3000px]:grid-cols-5 mt-16"}>
                <ShowcaseImage title={"GS Project"} type={"Моб.приложение"}
                               text={"Концепция, дизайн, разработка, продвижение, 3D, запуск MVP"} img={img}
                               alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img1} alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img2} alt={1}/>
                <Advert heading={"Разработка и дизайн онлайн-сервисов №1 в Якутии."}
                        text={"мы знаем свое дело"}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img2} alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img2} alt={1}/>
                <ShowcaseImage title={"GS Project"} type={"Моб.приложение"}
                               text={"Концепция, дизайн, разработка, продвижение, 3D, запуск MVP"} img={img}
                               alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img3} alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img3} alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img2} alt={1}/>
                <ShowcaseImage title={"GS Project"} type={"Моб.приложение"}
                               text={"Концепция, дизайн, разработка, продвижение, 3D, запуск MVP"} img={img}
                               alt={1}/>
                <ShowcaseImage title={"Solnse"} type={"Маркетинг"}
                               text={"Стратегия развития, контент, SMM продвижение"} img={img2} alt={1}/>
                <Advert heading={"Вам нужно к нам, если хотите деняк, бегооом"} text={"мы знаем свое дело"}/>
            </div>
        </div>
    );
}
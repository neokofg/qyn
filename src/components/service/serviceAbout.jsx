import ServiceAboutSection from "./serviceAboutSection.jsx";

export default function ServiceAbout() {
    return (
        <div className={"px-5 md:px-0 container mx-auto mt-10 md:mt-32"}>
            <h1 className={"text-[48px] md:text-[100px] italic"}>Графический дизайн</h1>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-4 gap-5"}>
                <ServiceAboutSection number={"01"} text={"Кикофф встреча и брифинг"} />
                <ServiceAboutSection number={"02"} text={"Исследование и анализ"} />
                <ServiceAboutSection number={"03"} text={"Удобный и интуитивный интерфейс"} />
                <ServiceAboutSection number={"04"} text={"Большой объем данных"} />
            </div>
        </div>
    );
}
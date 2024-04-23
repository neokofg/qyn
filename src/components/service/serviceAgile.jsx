import ServiceAgileSection from "./serviceAgileSection.jsx";

export default function ServiceAgile() {
    return (
        <div className={"px-5 md:px-0 container mx-auto mt-32"}>
            <h2 className={"text-[32px] md:text-[80px]"}>Наш подход</h2>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-5 mt-20"}>
                <ServiceAgileSection title={"Отличие"} text={"Создаем визуальные и вербальные образы, которые помогают быстро и однозначно идентифицировать бренд."}/>
                <ServiceAgileSection title={"Преимущества"} text={"Доносим преимущества продукта и создаем добавленную стоимость через высокий уровень исполнения."}/>
                <ServiceAgileSection title={"Масштабность"} text={"Масштабируем на физические носители и каналы коммуникации без потери единства стиля и смысла."}/>
                <ServiceAgileSection title={"Дизайн-система"} text={"Сохраняем узнаваемость в каждой точке касания — сайт, социальные сети, реклама, вывеска, носители."}/>
                <ServiceAgileSection title={"Простота"} text={"Стремимся к легкости восприятия смыслов через отсутствие лишних отвлекающих элементов."}/>
                <ServiceAgileSection title={"Цель"} text={"Создаем дизайн, в основе которого лежит позиционирование бизнеса, а не просто креативное решение."}/>
            </div>
        </div>
    );
}
import ServiceDescription from "./service_description.jsx";

export default function Services() {
    return (
        <div className={"mt-28 "}>
            <h2 className={"italic px-5 md:container md:px-0 mx-auto text-[44px] md:text-8xl pb-20"}>Услуги</h2>
            <ServiceDescription heading={"Брендинг"} advantages={["Продуктовый", "UX/UI", "Дизайн-система", "3D", "Motion", "Креативы"]} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription heading={"Разработка"} advantages={["Продуктовый", "UX/UI", "Дизайн-система", "3D", "Motion", "Креативы"]} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription color={"text-white"} advantages={["Продуктовый", "UX/UI", "Дизайн-система", "3D", "Motion", "Креативы"]} heading={"Дизайн"} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription heading={"Маркетинг"} advantages={["Продуктовый", "UX/UI", "Дизайн-система", "3D", "Motion", "Креативы"]} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription heading={"SMM"} advantages={["Продуктовый", "UX/UI", "Дизайн-система", "3D", "Motion", "Креативы"]} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
        </div>
    );
}
import ServiceDescription from "./service_description.jsx";

export default function Services() {
    return (
        <div className={"mt-28 "}>
            <h2 className={"italic container mx-auto text-8xl pb-20"}>Услуги</h2>
            <ServiceDescription bg={"bg-white"} heading={"Брендинг"} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription bg={"bg-white"} heading={"Разработка"} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription color={"text-white"} advantages={["Продуктовый", "UX/UI", "Дизайн-система", "3D", "Motion", "Креативы"]} bg={"bg-[#BEC2BB]"} heading={"Дизайн"} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription bg={"bg-white"} heading={"Маркетинг"} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
            <ServiceDescription bg={"bg-white"} heading={"SMM"} text={"As I dive deep into research, I strive to understand project goals and needs, creating a visual mood board and establishing the foundation for typography, layout, motion, and color. I always maintain a strong connection between functionality and user engagement."} />
        </div>
    );
}
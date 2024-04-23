import star from '../../assets/star.svg';
export default function ServiceInfo() {
    return (
        <div className={"bg-[#BEC2BB] w-full px-5 md:flex text-white mt-28"}>
            <div className={"basis-3/5 relative"}>
                <div className={"md:pr-[20px] pt-6 md:pt-0 md:pl-[100px] mt-10"}>
                    <p className={"text-[32px]"}>Создаем не просто сайты, а бренды</p>
                    <button className={"bg-white py-3 w-full mt-10 text-black"}>Давайте работать</button>
                </div>
                <img className={"absolute bottom-0 hidden md:inline"} src={star} alt=""/>
            </div>
            <div className={"flex flex-col"}>
                <div className={"p-4 md:p-10 border-b border-l border-r md:border-r-0"}>
                    <p className={"text-[38px] leading-10 md:text-[56px]"}>Трансформируем идею в <span className={"opacity-50"}>востребованный продукт</span></p>
                </div>
                <div className={"p-4 md:p-10 border-b border-l border-r md:border-r-0"}>
                    <p className={"text-[38px] leading-10 md:text-[56px]"}>Становимся инициаторами <span className={"opacity-50"}>развития вашего бизнеса</span></p>
                </div>
                <div className={"p-4 md:p-10 border-b border-l border-r md:border-r-0"}>
                    <p className={"text-[38px] leading-10 md:text-[56px]"}>Уделяем внимание мелочам,вплоть <span className={"opacity-50"}>до надписей на кнопках</span></p>
                </div>
            </div>
        </div>
    );
}
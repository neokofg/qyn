export default function ServiceAdvantages() {
    return (
        <div className={"mx-4 w-fit md:w-full container md:mx-auto bg-[#BEC2BB] text-white mt-28"}>
            <div className={"inline md:flex justify-between px-[40px] pt-[40px] pb-[80px]"}>
                <h3 className={"w-full md:w-2/5 px-5 text-[40px] md:text-[64px] leading-[38px] md:leading-[56px]"}>Преимущества работы с нами</h3>
                <p className={"w-full md:w-2/5 px-5 text-[22px] mt-5 md:mt-0 md:text-[28px] leading-7 md:leading-9"}>Специалисты из разных отделов нашего агентства создадут для вашего бренда оригинальное название. </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-0"}>
                <div className={"border p-[24px]"}>
                    <h4 className={"text-[64px]"}>110+</h4>
                    <p className={"text-[24px]"}>Реализованных кейсов</p>
                </div>
                <div className={"border p-[24px]"}>
                    <h4 className={"text-[64px]"}>10+</h4>
                    <p className={"text-[24px]"}>Высококвалифицированных сотрудников</p>
                </div>
                <div className={"border p-[24px]"}>
                    <h4 className={"text-[64px]"}>80+</h4>
                    <p className={"text-[24px]"}>Довольных клиентов со всего мира</p>
                </div>
            </div>
        </div>
    );
}
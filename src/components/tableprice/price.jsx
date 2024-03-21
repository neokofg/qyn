// eslint-disable-next-line react/prop-types
export default function Price({title,hourprice,dollars,description}) {
    return (
        <div className={"hover:bg-[#BEC2BB] transition-all ease-out hover:text-white price-text"}>
            <div className={"grid grid-cols-2 container mx-auto gap-0 pt-10 pb-16"}>
                <div>
                    <h3 className={"text-2xl mb-5 text-[#9E9E9E]"}>{title}</h3>
                    <div className={"flex justify-start items-end"}>
                        <h4 className={"text-7xl w-2/3"}>{hourprice} ₽ <span className={"text-[#9E9E9E]"}>/ час</span></h4>
                        <h4 className={"text-5xl"}>$ {dollars}</h4>
                    </div>
                </div>
                <div className={"px-24 flex justify-start items-end"}>
                    <p className={"text-2xl text-[#9E9E9E]"}>{description}</p>
                </div>
            </div>
        </div>
    );
}
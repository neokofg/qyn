// eslint-disable-next-line react/prop-types
export default function CaseDetail({detail_text, detail_photo}) {
    return (
        <div className={"flex flex-wrap"}>
            <div className={"md:basis-1/2 bg-white px-5 md:px-24 pt-10 pb-20 md:py-16"}>
                <h4 className={"text-2xl md:text-[32px] leading-8 md:leading-[40px]"}>
                    {detail_text}
                </h4>
            </div>
            <div className={"md:basis-1/2 w-full bg-[#BEC2BB] py-20 md:h-full flex justify-center items-center"}>
                <img className={"max-h-[355px] md:max-h-[535px]"} src={detail_photo} alt=""/>
            </div>
        </div>
    );
}
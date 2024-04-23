import arrow from '../../assets/arrow.svg'

// eslint-disable-next-line react/prop-types
function AdvantageList({advantages = []}) {
    if(window.outerWidth > 768) {
        return (
            <div className={"container hidden-container mx-auto grid px-5 md:px-0 grid-cols-2 md:grid-cols-4 gap-5 md:gap-10"}>
                {advantages.map((text, index) => (
                    <div className={"h-[200px] flex flex-col justify-between bg-[#F5F5F5] p-6"} key={index}>
                        <img src={arrow} className={"max-w-[80px]"} alt=""/>
                        <h4 className={"text-xl text-black font-normal"}>{text}</h4>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className={"hidden-container mx-auto grid px-5 md:px-0 grid-cols-1 md:grid-cols-4 gap-5 md:gap-10"}>
                {advantages.map((text, index) => (
                    <div className={"h-[72px] flex items-center justify-between bg-[#F5F5F5] py-3 pr-3 pl-6"} key={index}>
                        <h4 className={"text-xl text-black font-normal"}>{text}</h4>
                        <img src={arrow} className={"max-w-[48px]"} alt=""/>
                    </div>
                ))}
            </div>
        );
    }
}

// eslint-disable-next-line react/prop-types
export default function ServiceDescription({heading, text, advantages}) {
    return (
        <div
            className={"bg-white overflow-hidden hover:bg-[#BEC2BB] pb-10 text-black hover:text-white transition-all ease-out advantages-black"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 pb-10 pt-10 px-5 md:container md:px-0 mx-auto"}>
                <div className={"col-span-1"}>
                    <h3 className={"text-2xl"}>{heading}</h3>
                </div>
                <div className={"col-span-1 mt-10 md:mt-0"}>
                    <p className={"text-lg text-[#9E9E9E]"}>{text}</p>
                </div>
            </div>
            <AdvantageList advantages={advantages} />
        </div>
    );
}
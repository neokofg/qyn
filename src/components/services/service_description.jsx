import img from '../../assets/services/img.png'

// eslint-disable-next-line react/prop-types
function AdvantageList({advantages = []}) {
    if(window.outerWidth > 768) {
        return (
            <div className={"text-white flex flex-wrap max-w-96"}>
                {advantages.map((text, index) => (
                    <div className={"bg-white mt-2 mr-2 px-3 py-3 font-normal"} key={index}>{text}</div>
                ))}
                <div className={"bg-white mt-2 mr-2 px-2 py-3 font-normal"}></div>
            </div>
        );
    } else {
        return (
            <div className={"hidden hidden-container transition-all"}>
                <div className={"text-white flex flex-wrap max-w-96"}>
                    {advantages.map((text, index) => (
                        <div className={"bg-white mt-2 mr-2 px-3 py-3 font-normal"} key={index}>{text}</div>
                    ))}
                    <div className={"bg-white mt-2 mr-2 px-2 py-3 font-normal"}></div>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line react/prop-types
export default function ServiceDescription({heading, text, advantages}) {
    return (
        <div
            className={"bg-white hover:bg-[#BEC2BB] text-black hover:text-white transition-all ease-out advantages-black"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 pb-20 pt-10 px-5 md:container md:px-0 mx-auto"}>
                <div className={"col-span-1"}>
                    <h3 className={"text-2xl"}>{heading}</h3>
                    <AdvantageList advantages={advantages} />
                </div>
                <div className={"col-span-1 mt-10 md:mt-0"}>
                    <img className="w-[128px] pb-6" draggable={"false"} src={img} alt="1"/>
                    <p className={"text-lg"}>{text}</p>
                </div>
            </div>
        </div>
    );
}
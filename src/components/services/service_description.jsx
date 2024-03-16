import img from '../../assets/services/img.png'

// eslint-disable-next-line react/prop-types
function AdvantageList({advantages = []}) {
    return (
        <div className={"text-black flex flex-wrap max-w-96"}>
            {advantages.map((text, index) => (
                <div className={"bg-white mt-2 mr-2 px-3 py-3 font-normal"} key={index}>{text}</div>
            ))}
            <div className={"bg-white mt-2 mr-2 px-2 py-3 font-normal"}></div>
        </div>
    );
}
// eslint-disable-next-line react/prop-types
export default function ServiceDescription({bg, heading, text, color = 'text-black', advantages}) {
    return (
        <div className={bg + " " + color}>
            <div className={"grid grid-cols-2 pb-20 pt-10 container mx-auto"}>
                <div className={"col-span-1"}>
                    <h3 className={"text-2xl"}>{heading}</h3>
                    <AdvantageList advantages={advantages} />
                </div>
                <div className={"col-span-1"}>
                    <img className="w-[128px] pb-6" draggable={"false"} src={img} alt="1"/>
                    <p className={"text-lg"}>{text}</p>
                </div>
            </div>
        </div>
    );
}
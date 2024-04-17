// eslint-disable-next-line react/prop-types
export default function CaseStart({title, text}) {

    function Adaptive() {
        if(window.outerWidth > 768) {
            return (
                <div className={"h-[550px] mb-10 w-full flex justify-between px-24 items-end"}>
                    <h1 className={"text-8xl"}>{title}</h1>
                    <p className={"text-2xl w-1/3"}>{text}</p>
                </div>
            );
        } else {
            return (
                <div className={"w-full px-5 py-5"}>
                    <h1 className={"text-5xl"}>{title}</h1>
                    <div className={"h-[200px]"}></div>
                    <p className={"text-lg mb-5"}>{text}</p>
                    <button className={"w-full py-5 bg-[#BEC2BB] text-white"}>Смотреть</button>
                </div>
            );
        }
    }

    return (
        <Adaptive />
    );
}
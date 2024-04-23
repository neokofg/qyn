// eslint-disable-next-line react/prop-types
export default function ShowcaseImage({ img, alt, title, type, text }) {

    if(window.outerWidth > 768) {
        return (
            <div className={"relative animate-show"}>
                <img src={img} draggable={"false"} alt={alt}/>
                <div className={"w-full py-3 px-10 flex justify-between absolute bottom-0 bg-white animate-up-fast"}>
                    <h3 className={"text-3xl"}>{title}</h3>
                    <h4 className={"text-2xl text-[#9E9E9E]"}>{type}</h4>
                </div>
                <div className={"w-full h-[100px] px-10 flex items-center absolute bottom-0 bg-white animate-up-slow"}>
                    <p className={"text-2xl w-3/4"}>{text}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className={"relative animate-show-adaptive"}>
                <img src={img} draggable={"false"} alt={alt}/>
                <div className={"w-full py-3 px-5 flex justify-between items-center absolute bottom-0 bg-white animate-up-fast"}>
                    <h3 className={"text-[20px]"}>{title}</h3>
                    <h4 className={"text-[16px] text-[#9E9E9E]"}>{type}</h4>
                </div>
            </div>
        );
    }
}
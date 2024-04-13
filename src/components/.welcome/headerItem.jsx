export default function HeaderItem({title, text, border}) {

    function IsBorder (border) {
        if(border.border == true) {
            return (
                <div className="absolute top-1/4 right-0 w-[1px] h-1/2 bg-[#F3F3F3]"></div>
            );
        }
    }

    return (
        <div className={"relative w-[200px]"}>
            <div className={"bg-[#D9D9D9] w-[64px] h-[64px] mx-auto"}>

            </div>
            <h4 className={"mt-4 text-[24px] text-black"}>{title}</h4>
            <p className={"text-[#A7A7A7]"}>{text}</p>
            <IsBorder border={border} />
        </div>
    );
}
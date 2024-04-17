// eslint-disable-next-line react/prop-types
export default function CasePhotos({photo1, photo2, photo3, photo4, photo5}) {
    return (
        <div className={"w-full flex flex-wrap justify-center md:justify-between items-center px-5 py-20 gap-7 md:px-24"}>
            <img className={"max-h-[313px] md:max-h-[490px]"} src={photo1} alt=""/>
            <img className={"max-h-[313px] md:max-h-[490px]"} src={photo2} alt=""/>
            <img className={"max-h-[313px] md:max-h-[490px]"} src={photo3} alt=""/>
            <img className={"max-h-[313px] md:max-h-[490px]"} src={photo4} alt=""/>
            <img className={"max-h-[313px] md:max-h-[490px]"} src={photo5} alt=""/>
        </div>
    );
}
import buttonsvg from '../../assets/button.svg';
export default function Showreel() {
    return (
        <div className={"mb-16"}>
            <h1 className={"container mx-auto text-8xl py-32"}>Кейсы</h1>
            <div className={"flex justify-center items-center bg-[#BEC2BB] w-full h-[620px]"}>
                <button className={"rounded-[444px] w-[160px] h-[160px] bg-white"}>
                    <p className={"flex items-center justify-center gap-2 italic text-lg"}><span><img src={buttonsvg} alt=""/></span>Шоурил</p>
                </button>
            </div>
        </div>
    );
}
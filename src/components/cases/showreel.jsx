import buttonsvg from '../../assets/button.svg';
export default function Showreel() {
    function Adaptive() {
        if(window.outerWidth > 768) {
            return (
                <div className={"flex justify-center items-center bg-[#BEC2BB] w-full h-[620px]"}>
                    <button className={"rounded-[444px] w-[160px] h-[160px] bg-white"}>
                        <p className={"flex items-center justify-center gap-2 italic text-lg"}><span><img
                            src={buttonsvg} alt=""/></span>Шоурил</p>
                    </button>
                </div>
            );
        }
    }

    return (
        <div className={"mb-5 md:mb-16"}>
            <h1 className={"container mx-auto px-5 md:px-0 text-5xl md:text-8xl italic py-5 md:py-32"}>Кейсы <span
                className={"text-[#BEC2BB] text-[32px] align-top"}>110</span></h1>
            <Adaptive/>
        </div>
    );
}
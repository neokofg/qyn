import {useNavigate} from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate()
    function redirect() {
        navigate('/order')
    }
    return (
        <div className={"bg-white"}>
            <div className={"py-16 border-b-2"}>
            </div>
            <div className={"container mx-auto mt-24"}>
                <div className={"flex justify-center items-center w-full h-[250px] bg-contain bg-no-repeat bg-center bg-[url(/footer.png)]"}>
                    <button onClick={redirect} className={"py-5 px-7 bg-[#BEC2BB] z-10"}>
                        <span className={"text-white text-4xl italic underline underline-offset-8 decoration-2"}>Связаться</span>
                    </button>
                </div>
                <h3 className={"text-[32px] md:text-6xl text-[#BEC2BB] text-center mt-5"}>qyn.studio@mail.ru</h3>
                <div className={"text-xl flex flex-wrap gap-5 justify-center mt-5"}>
                    <a className={""} href="#">+7 (900) 000-00-00</a>
                    <a className={"underline ml-2"} href="#">WhatsApp</a>
                    <a className={"underline ml-2"} href="#">Telegram</a>
                </div>
            </div>
            <div className={"py-10"}>
            </div>
        </div>
    );
}
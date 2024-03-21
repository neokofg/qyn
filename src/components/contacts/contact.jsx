import map from '../../assets/map.png'
export default function Contact() {
    return (
        <div>
            <div className={"container mx-auto flex justify-between gap-56 mt-24"}>
                <h1 className={"text-8xl"}>Контакты</h1>
                <div className={"mr-6"}>
                    <h3 className={"text-6xl text-[#BEC2BB] text-end"}>qyn.studio@mail.ru</h3>
                    <div className={"mt-5 text-xl"}>
                        <a className={"underline"} href="#">WhatsApp</a>
                        <a className={"underline ml-6"} href="#">Telegram</a>
                    </div>
                    <div className={"mt-16 text-2xl"}>
                        <p>Якутск, Ленина 1, 616 каб</p>
                        <a href="">+7 (900) 000-00-00</a>
                    </div>
                </div>
            </div>
            <div>
                <img src={map} className={"mt-32"} alt=""/>
            </div>
        </div>
    );
}
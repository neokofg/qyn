import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
export default function Contact() {
    return (
        <div>
            <div className={"container mx-auto flex justify-between gap-56 mt-24 mb-32"}>
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
            <YMaps query={{lang: "ru_RU", apikey: "be203022-19da-4b49-8bcb-5ca04a8cb7ea"}}>
                <Map options={{
                    maxZoom: 20,
                    minZoom: 3,
                    autoFitToViewport: 'always',
                    suppressMapOpenBlock: true,
                    restrictMapArea: [
                        [84.23618, -168.9],
                        [-73.87011, 191],
                    ],
                }} width={"full"} height={"600px"} defaultState={{ center: [62.032726, 129.750332], zoom: 17 }}>
                    <Placemark
                        geometry={[62.032726, 129.750332]}
                        options={{
                            hasBalloon: false,
                            iconImageSize: [54, 47],
                            preset: 'islands#invertedVioletClusterIcons',
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    );
}
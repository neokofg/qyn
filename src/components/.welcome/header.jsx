import Logo from '../../assets/logo.jsx'
import RoundedButton from "../../ui/rounded_button.jsx";
import {useEffect, useState} from "react";
import HeaderItem from "./headerItem.jsx";
import {div} from "three/examples/jsm/nodes/math/OperatorNode.js";

export default function Header() {
    const [buttonIcon, setButtonIcon] = useState(
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
            <rect y="4.5" width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
        </svg>
    )

    const [status, setStatus] = useState({ color: '#31CF38', text: 'мы онлайн' });

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const localTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
            const targetTime = new Date(localTime.getTime() + (9 * 3600000)); // Смещение на +9 часов

            const hours = targetTime.getHours();

            if (hours >= 9 && hours < 18) {
                setStatus({ color: '#31CF38', text: 'мы онлайн' });
            } else {
                setStatus({ color: '#FF0000', text: 'мы оффлайн' });
            }
        };
        checkStatus();
    }, []);
    const [topPosition, setTopPosition] = useState('-1000px');
    function HeaderToggle() {
        if(window.outerWidth > 768) {
            setTopPosition(prevTopPosition => (prevTopPosition === '0' ? '-1000px' : '0'));
            if(topPosition === '-1000px') {
                setButtonIcon(<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.41431" width="14" height="2" rx="1" transform="rotate(45 1.41431 0)" fill="#9CA5AC"/>
                    <rect y="9.89941" width="14" height="2" rx="1" transform="rotate(-45 0 9.89941)" fill="#9CA5AC"/>
                </svg>)
            } else {
                setButtonIcon(<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
                    <rect y="4.5" width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
                </svg>)
            }
        } else {
            setTopPosition(prevTopPosition => (prevTopPosition === '64' ? '-1000px' : '64'));
            if(topPosition === '-1000px') {
                setButtonIcon(<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.41431" width="14" height="2" rx="1" transform="rotate(45 1.41431 0)" fill="#9CA5AC"/>
                    <rect y="9.89941" width="14" height="2" rx="1" transform="rotate(-45 0 9.89941)" fill="#9CA5AC"/>
                </svg>)
            } else {
                setButtonIcon(<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
                    <rect y="4.5" width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
                </svg>)
            }
        }
    }

    function Adaptive() {
        if(window.outerWidth > 768) {
            return (
                <div>
                    <div className={"absolute inset-x-0 top-0 flex z-20 container mx-auto pt-6 items-center"}>
                        <a href="/"><Logo/></a>
                        <div className={"flex flex-col ml-0 md:ml-[70px] text-base font-normal"}>
                            <p>Якутск +9 GMT</p>
                            <p className={"flex items-baseline"}>
                            <span>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.6665" cy="4" r="4" fill={status.color}/>
                                </svg>
                            </span>
                                <span className={"opacity-40 ml-2"}>{status.text}</span>
                            </p>
                        </div>
                        <div className={"flex ml-auto items-center"}>
                            <a href={'/cases'} className={"mr-[32px] cursor-pointer"}>Кейсы</a>
                            <a href={'/services'} className={"mr-[32px] cursor-pointer"}>Услуги</a>
                            <a href={'/contacts'} className={"mr-[32px] cursor-pointer"}>Контакты</a>
                            <div onClick={HeaderToggle}><RoundedButton icon={buttonIcon}/></div>
                        </div>
                    </div>
                    <div className={"absolute z-10 inset-x-0 w-full bg-white h-[320px] py-32 px-64 transition-all"}
                         style={{top: topPosition}}>
                        <div className={"flex text-center"}>
                            <HeaderItem title={"Маркетинг"} text={"от 15 дней"} border={true}/>
                            <HeaderItem title={"Брендинг"} text={"от 15 дней"} border={true}/>
                            <HeaderItem title={"Сайт"} text={"от 15 дней"} border={true}/>
                            <HeaderItem title={"MVP"} text={"от 15 дней"} border={true}/>
                            <HeaderItem title={"Приложение"} text={"от 15 дней"} border={true}/>
                            <HeaderItem title={"No code"} text={"от 15 дней"} border={true}/>
                            <HeaderItem title={"SMM / Reels"} text={"от 15 дней"} border={false}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className={"w-full h-[64px] flex justify-between items-center px-5 bg-white z-50"}>
                        <div className={"flex justify-start items-center"}>
                            <a className={"w-1/3"} href="/"><Logo/></a>
                            <div className={"flex flex-col ml-2 text-base font-normal"}>
                                <p>Якутск +9 GMT</p>
                                <p className={"flex items-baseline"}>
                            <span>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.6665" cy="4" r="4" fill={status.color}/>
                                </svg>
                            </span>
                                    <span className={"opacity-40 ml-2"}>{status.text}</span>
                                </p>
                            </div>
                        </div>
                        <div onClick={HeaderToggle}><RoundedButton icon={buttonIcon}/></div>
                    </div>
                    <div className={"absolute z-20 inset-x-0 w-full bg-white h-screen md:h-[320px] pt-10 md:pt-0 md:py-32 md:px-64 transition-all"}
                         style={{top: topPosition}}>
                        <div className={"flex flex-wrap justify-center text-center"}>
                            <HeaderItem title={"Маркетинг"} text={""} border={true}/>
                            <HeaderItem title={"Брендинг"} text={""} border={false}/>
                            <HeaderItem title={"Сайт"} text={""} border={true}/>
                            <HeaderItem title={"MVP"} text={""} border={false}/>
                            <HeaderItem title={"Приложение"} text={""} border={true}/>
                            <HeaderItem title={"SMM / Reels"} text={""} border={false}/>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        <Adaptive/>
    );
}
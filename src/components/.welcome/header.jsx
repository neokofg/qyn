import Logo from '../../assets/logo.jsx'
import RoundedButton from "../../ui/rounded_button.jsx";
import {useEffect, useState} from "react";

export default function Header() {
    const buttonIcon = (
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
            <rect y="4.5" width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
        </svg>
    );

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

    return (
        <div className={"flex container mx-auto pt-6 items-center"}>
            <a href="/"><Logo /></a>
            <div className={"flex flex-col ml-[70px] text-base font-normal"}>
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
                <RoundedButton icon={buttonIcon}/>
            </div>

        </div>
    );
}
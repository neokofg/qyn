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
        // Функция для проверки текущего времени и определения статуса онлайн/оффлайн
        const checkStatus = () => {
            const now = new Date();
            const localTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
            const targetTime = new Date(localTime.getTime() + (9 * 3600000)); // Смещение на +9 часов

            const hours = targetTime.getHours();

            // Проверяем, находится ли текущее время в диапазоне с 09:00 до 18:00
            if (hours >= 9 && hours < 18) {
                setStatus({ color: '#31CF38', text: 'мы онлайн' });
            } else {
                setStatus({ color: '#FF0000', text: 'мы оффлайн' });
            }
        };

        // Вызываем функцию проверки при монтировании компонента
        checkStatus();

        // Можно также установить интервал для периодической проверки, если это необходимо
    }, []);

    return (
        <div className={"flex container mx-auto pt-6 items-center"}>
            <Logo />
            <div className={"flex flex-col ml-[120px] text-base font-normal"}>
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
                <a className={"mr-[32px] cursor-pointer"}>Кейсы</a>
                <a className={"mr-[32px] cursor-pointer"}>Услуги</a>
                <a className={"mr-[32px] cursor-pointer"}>О нас</a>
                <a className={"mr-[32px] cursor-pointer"}>Контакты</a>
                <RoundedButton icon={buttonIcon}/>
            </div>
        </div>
    );
}
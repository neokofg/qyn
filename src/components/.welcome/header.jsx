import Logo from '../../assets/logo.jsx'
import RoundedButton from "../../ui/rounded_button.jsx";
import {useState} from "react";

export default function Header() {
    const [progress, setProgress] = useState(0);
    const buttonIcon = (
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
            <rect y="4.5" width="14" height="1.5" rx="0.75" fill="#9CA5AC"/>
        </svg>
    );

    return (
        <div className={"flex container mx-auto pt-6 items-center"}>
            <Logo />
            <div className={"flex flex-col ml-[120px] text-base font-normal"}>
                <p className={""}>Якутск +9 GMT</p>
                <p className={"flex items-baseline"}>
                    <span>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4.6665" cy="4" r="4" fill="#31CF38"/>
                        </svg>
                    </span>
                    <span className={"opacity-40 ml-2"}>мы онлайн</span>
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
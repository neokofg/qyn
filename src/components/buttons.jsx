import RoundedButton from "../ui/rounded_button.jsx";
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export default function Buttons() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const bgButton = isScrolled
        ? "bg-white"
        : "bg-white";
    const iconColor = isScrolled
        ? "#000000"
        : "#9CA5AC";
    const position = isScrolled
        ? "bottom-2 md:bottom-12"
        : "bottom-10 md:bottom-36";

    const buttonIcon = (
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="2" height="7" fill={iconColor}/>
            <rect x="4" width="2" height="13" fill={iconColor}/>
            <rect x="8" y="6" width="2" height="7" fill={iconColor}/>
            <rect x="12" y="5" width="2" height="8" fill={iconColor}/>
            <rect x="16" y="3" width="2" height="10" fill={iconColor}/>
        </svg>
    );

    function redirect() {
        navigate('/order')
    }
    return (
        <div className={position + " " + "fixed transition-all ease-in-out duration-500 w-full z-20"}>
            <div className={"flex inset-0 px-4 md:container md:px-0 mx-auto justify-between items-center pb-6"}>
                <button onClick={redirect} className={bgButton + " " + "transition-all ease-in-out duration-500 rounded-[36px] py-[10px] px-[14px]"}>Оставить заявку</button>
                <RoundedButton bg={bgButton} icon={buttonIcon}/>
            </div>
        </div>
    );
}
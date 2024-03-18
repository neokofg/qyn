import RoundedButton from "../ui/rounded_button.jsx";
import { useState, useEffect } from 'react';

export default function Footer() {
    const [isScrolled, setIsScrolled] = useState(false);

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
        ? "bg-white/50 backdrop-blur-sm"
        : "bg-white";
    const iconColor = isScrolled
        ? "#000000"
        : "#9CA5AC";
    const position = isScrolled
        ? "bottom-10"
        : "bottom-36";

    const buttonIcon = (
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="2" height="7" fill={iconColor}/>
            <rect x="4" width="2" height="13" fill={iconColor}/>
            <rect x="8" y="6" width="2" height="7" fill={iconColor}/>
            <rect x="12" y="5" width="2" height="8" fill={iconColor}/>
            <rect x="16" y="3" width="2" height="10" fill={iconColor}/>
        </svg>
    );
    return (
        <div className={position + " " + "fixed transition-all ease-in-out duration-500 w-full"}>
            <div className={"flex inset-0 container mx-auto justify-between items-center pb-6"}>
                <button className={bgButton + " " + "transition-all ease-in-out duration-500 rounded-[36px] py-[10px] px-[14px]"}>написать в тг</button>
                <RoundedButton bg={bgButton} icon={buttonIcon}/>
            </div>
        </div>
    );
}
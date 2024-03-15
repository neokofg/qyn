import RoundedButton from "../../ui/rounded_button.jsx";

export default function Footer() {
    const buttonIcon = (
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="2" height="7" fill="#9CA5AC"/>
            <rect x="4" width="2" height="13" fill="#9CA5AC"/>
            <rect x="8" y="6" width="2" height="7" fill="#9CA5AC"/>
            <rect x="12" y="5" width="2" height="8" fill="#9CA5AC"/>
            <rect x="16" y="3" width="2" height="10" fill="#9CA5AC"/>
        </svg>
    );
    return (
        <div className={"flex container mx-auto justify-between items-center pb-6"}>
            <button className={"bg-white rounded-[36px] py-[10px] px-[14px]"}>написать в тг</button>
            <RoundedButton icon={buttonIcon} />
        </div>
    );
}
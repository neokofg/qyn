// eslint-disable-next-line react/prop-types
export default function ServiceAboutSection({number, text}) {
    return (
        <div className={"flex flex-col justify-between h-[180px] md:h-[220px] bg-[#F5F5F5] p-6"}>
            <div className={"bg-white p-[1px] flex items-center justify-center rounded-[12px] w-[56px] h-[56px]"}>
                <p className={"text-[24px]"}>{number}</p>
            </div>
            <p className={"text-[20px]"}>{text}</p>
        </div>
    );
}
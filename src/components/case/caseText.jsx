// eslint-disable-next-line react/prop-types
export default function CaseText({text}) {
    return (
        <div className={"w-full flex bg-white items-center pt-10 md:pt-24 pb-14 md:pb-32 px-5 md:px-24"}>
            <h3 className={"text-2xl md:text-[52px] leading-8 md:leading-[62px] w-full lg:w-1/2"}>{text}</h3>
        </div>
    );
}
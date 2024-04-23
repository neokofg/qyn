// eslint-disable-next-line react/prop-types
export default function ServiceAgileSection({title, text}) {
    return (
        <div className={"bg-[#F5F5F5] flex flex-col justify-between h-[200px] md:h-[220px] p-6"}>
            <h4 className={"text-black text-[24px]"}>{title}</h4>
            <p className={"text-[#0E1117] opacity-40 text-[18px]"}>{text}</p>
        </div>
    );
}
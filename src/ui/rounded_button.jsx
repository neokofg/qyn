// eslint-disable-next-line react/prop-types
export default function RoundedButton({ icon, bg = "bg-white" }) {
    return (
        <button className={bg + " " + "transition-all ease-in-out duration-500 flex justify-center items-center w-[48px] h-[48px] rounded-[31px]"}>
            {icon}
        </button>
    );
}
// eslint-disable-next-line react/prop-types
export default function RoundedButton({ icon }) {
    return (
        <button className={"flex justify-center items-center bg-white w-[48px] h-[48px] rounded-[31px]"}>
            {icon}
        </button>
    );
}
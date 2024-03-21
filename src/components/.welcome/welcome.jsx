import Header from "./header.jsx";
import Buttons from "../buttons.jsx";
import biglogo from "../../assets/biglogo.svg";

export default function Welcome() {
    return (
        <div className={"flex flex-col bg-[#E9E9E9] h-[800px]"}>
            <Header/>
            <div className={"flex h-full justify-center items-center"}>
                <img src={biglogo} draggable={"false"} alt="Q'yh Studio"/>
            </div>
        </div>
    );
}
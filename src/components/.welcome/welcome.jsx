import Header from "./header.jsx";
import Footer from "./footer.jsx";
import biglogo from "../../assets/biglogo.svg";

export default function Welcome() {
    return (
        <div className={"flex flex-col justify-between bg-[#E9E9E9] h-[800px]"}>
            <Header/>
            <div className={"flex justify-center items-center"}>
                <img src={biglogo} alt="Q'yh Studio"/>
            </div>
            <Footer/>
        </div>
    );
}
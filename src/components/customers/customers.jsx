import CustomerImage from "../../ui/customer_image.jsx";
import img from '../../assets/customers/img.png';
import img1 from '../../assets/customers/img_1.png';
import img2 from '../../assets/customers/img_2.png';
import Marquee from "react-fast-marquee";

export default function Customers() {
    return (
        <div className={"py-28"}>
            <Marquee autoFill={true} pauseOnClick={true} gradient={true}>
                <CustomerImage img={img} alt={"НВК САХА"} />
                <CustomerImage img={img1} alt={"Технопарк Якутия"} />
                <CustomerImage img={img2} alt={"Парк Будущих Поколений"} />
            </Marquee>
        </div>
    );
}
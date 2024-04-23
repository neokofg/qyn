import Header from "../components/.welcome/header.jsx";
import Showcase from "../components/projects/showcase.jsx";
import Footer from "../components/footer.jsx";
import Showreel from "../components/cases/showreel.jsx";
import OurCases from "../components/cases/ourCases.jsx";

export default function Cases() {
    return (
        <div>
            <Header/>
            <Showreel/>
            <OurCases/>
            <Footer/>
        </div>
    );
}
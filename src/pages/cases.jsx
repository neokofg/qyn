import Header from "../components/.welcome/header.jsx";
import Showcase from "../components/projects/showcase.jsx";
import Footer from "../components/footer.jsx";
import Showreel from "../components/cases/showreel.jsx";

export default function Cases() {
    return (
        <div>
            <Header/>
            <Showreel/>
            <Showcase filters={"yes"}/>
            <Footer/>
        </div>
    );
}
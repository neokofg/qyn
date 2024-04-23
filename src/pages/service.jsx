import Header from "../components/.welcome/header.jsx";
import ServiceAbout from "../components/service/serviceAbout.jsx";
import ServiceInfo from "../components/service/serviceInfo.jsx";
import ServiceAgile from "../components/service/serviceAgile.jsx";
import ServiceExamples from "../components/service/serviceExamples.jsx";
import Footer from "../components/footer.jsx";
import ServiceAdvantages from "../components/service/serviceAdvantages.jsx";

export default function ServicePage() {
    return (
        <div>
            <Header />
            <ServiceAbout/>
            <ServiceInfo />
            <ServiceAgile />
            <ServiceExamples/>
            <ServiceAdvantages/>
            <Footer />
        </div>
    );
}
import Welcome from "../components/.welcome/welcome.jsx";
import Customers from "../components/customers/customers.jsx";
import Showcase from "../components/projects/showcase.jsx";
import Services from "../components/services/services.jsx";
import Footer from "../components/footer.jsx";

export default function Index() {
    return (
        <div>
            <Welcome/>
            <Customers/>
            <Showcase/>
            <Services/>
            <Footer/>
        </div>
    );
}
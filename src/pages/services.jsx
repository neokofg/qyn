import OutCustomers from "../components/services/our_customers.jsx";
import Footer from "../components/footer.jsx";
import Header from "../components/.welcome/header.jsx";
import Services from "../components/services/services.jsx";

export default function ServicesPage() {
    return (
        <div>
            <Header/>
            <Services/>
            {/*<OutCustomers/>*/}
            <Footer/>
        </div>
    );
}
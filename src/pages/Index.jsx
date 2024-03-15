import Welcome from "../components/.welcome/welcome.jsx";
import Customers from "../components/customers/customers.jsx";
import Showcase from "../components/showcase/showcase.jsx";

export default function Index() {
    return (
        <div>
            <Welcome/>
            <Customers/>
            <Showcase/>
        </div>
    );
}
import {createBrowserRouter} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cases from "./pages/cases.jsx";
import Case from "./pages/case.jsx";
import ServicesPage from "./pages/services.jsx";
import Contacts from "./pages/contacts.jsx";
import Order from "./pages/order.jsx";
import ServicePage from "./pages/service.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/cases",
        element: <Cases/>,
    },
    {
        path: "/case/:caseId",
        element: <Case />
    },
    {
        path: "/services",
        element: <ServicesPage/>
    },
    {
        path: "/contacts",
        element: <Contacts/>
    },
    {
        path: "/order",
        element: <Order />
    },
    {
        path: "/service/:serviceId",
        element: <ServicePage/>
    }
]);

export default router
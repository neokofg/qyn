import Welcome from "../components/.welcome/welcome.jsx";
import Customers from "../components/customers/customers.jsx";
import Showcase from "../components/projects/showcase.jsx";
import Services from "../components/services/services.jsx";
import Footer from "../components/footer.jsx";
import {useEffect, useState} from "react";
import Loader from "../components/loader.jsx";

export default function Index() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Функция, которая будет вызвана после загрузки страницы
        const handleLoad = () => {
            setIsLoading(false); // Скрываем лоадер
            document.querySelector('.body-content').classList.add('loaded');
        };

        window.addEventListener('load', handleLoad);

        // Если страница уже загружена до момента монтирования этого компонента, сразу скроем лоадер
        if (document.readyState === 'complete') {
            setIsLoading(false);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div>
            {isLoading && <Loader />}
            <div className={"body-content"}>
                <Welcome/>
                <Customers/>
                <Showcase/>
                <Services/>
                <Footer/>
            </div>
        </div>
    );
}
import Welcome from "../components/.welcome/welcome.jsx";
import Customers from "../components/customers/customers.jsx";
import Showcase from "../components/projects/showcase.jsx";
import Services from "../components/services/services.jsx";
import Buttons from "../components/buttons.jsx";
import {useEffect, useState} from "react";
import Loader from "../components/loader.jsx";
import Tableprice from "../components/tableprice/tableprice.jsx";
import Footer from "../components/footer.jsx";

export default function Index() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const isLoaded = sessionStorage.getItem('isLoaded');
    useEffect(() => {
        if(isLoaded === 'true') {
            document.querySelector('.body-content').classList.add('loaded');
            if (document.readyState === 'complete') {
                setIsLoading(false);
            }
        } else {
            setIsLoading(true);
            let loaded = 0;
            const totalResources = document.images.length; // Допустим, мы отслеживаем загрузку изображений

            const updateProgress = () => {
                loaded += 1;
                setProgress(Math.floor((loaded / totalResources) * 100));
            };

            Array.from(document.images).forEach(image => {
                if (image.complete) {
                    loaded += 1;
                } else {
                    image.addEventListener('load', updateProgress, { once: true });
                    image.addEventListener('error', updateProgress, { once: true });
                }
            });

            setProgress(Math.floor((loaded / totalResources) * 100));

            if(progress === 100) {
                setTimeout(() => {
                    setIsLoading(false);
                    document.querySelector('.body-content').classList.add('loaded');
                    if (document.readyState === 'complete') {
                        setIsLoading(false);
                    }
                    sessionStorage.setItem('isLoaded', 'true')
                }, 500)
            }
        }
    }, [isLoaded, progress]);

    return (
        <div>
            {isLoading && <Loader progress={progress} />}
            <div className={"body-content"}>
                <Welcome/>
                <Customers/>
                <Showcase/>
                <Services/>
                {/*<Tableprice/>*/}
                <Footer/>
                <Buttons/>
            </div>
        </div>
    );
}
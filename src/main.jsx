import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cases from "./pages/cases.jsx";
import ServicesPage from "./pages/services.jsx";
import Contacts from "./pages/contacts.jsx";

function disableCtrlScrollZoom(event) {
    // Проверяем, нажата ли клавиша Ctrl (event.ctrlKey) и является ли событие прокруткой колесика мыши (event.type === 'wheel')
    if (event.ctrlKey && event.type === 'wheel') {
        // Предотвращаем действие по умолчанию (масштабирование)
        event.preventDefault();
    }
}
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
        path: "/services",
        element: <ServicesPage/>
    },
    {
        path: "/contacts",
        element: <Contacts/>
    }
]);

// Добавляем обработчики событий на весь документ
document.addEventListener('wheel', disableCtrlScrollZoom, { passive: false });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

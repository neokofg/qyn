import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx"
function disableCtrlScrollZoom(event) {
    // Проверяем, нажата ли клавиша Ctrl (event.ctrlKey) и является ли событие прокруткой колесика мыши (event.type === 'wheel')
    if (event.ctrlKey && event.type === 'wheel') {
        // Предотвращаем действие по умолчанию (масштабирование)
        event.preventDefault();
    }
}


// Добавляем обработчики событий на весь документ
document.addEventListener('wheel', disableCtrlScrollZoom, { passive: false });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

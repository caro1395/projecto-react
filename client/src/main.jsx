import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNueva from './AppNueva';
import Barchart from './chart/Barchart';
import Login from './paginas/Login';
import App from './App';
import AppNueva2 from './AppNueva2';
import Prueba from './pruebas/prueba';
import Login2 from './paginas/Login2';
import PaginaApiTareas from './paginas/PaginaApiTareas';
//import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   
    <AppNueva2/>

    </BrowserRouter>
  </React.StrictMode>,
)

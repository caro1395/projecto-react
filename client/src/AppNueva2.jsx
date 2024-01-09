import {Route,Routes} from 'react-router-dom'
import Login from './paginas/Login';
import BuscadorCliente from './paginas/BuscadorCliente';
import { useEffect, useState } from "react";
import Navbar from './componentes/Navbar';
import PaginaTareas2 from './paginas/PaginaTareas2';
import Barchart from './chart/Barchart';
import ProtectedRouted from './paginas/ProtectedRouted';
import PaginaApiTareas from './paginas/PaginaApiTareas';

const AppNueva2=()=>{
    const [user,setUser]=useState([]);
  //  const [nombrerecibido,setnombrerecibido]=useState([]);

    const handleLogout=()=>{
     //   setUser([]);
     sessionStorage.removeItem('nombrerecibido');
     window.location.reload();


    };

  

/*
const getlocalstore1=()=>{
    localStorage.setItem('nombrerecibido',user);
}
*/



    return(
       /* <div className='container-fluid p-3 d-flex flex-row '> */

       <div className='container'>
        <div className=''>
        <Navbar/>
       
        
        {
        !JSON.parse(sessionStorage.getItem('nombrerecibido'))? 
        (<div></div>)
        :(
        <div>
            <button className='desloguearse' onClick={handleLogout}>LogOut</button>
        </div>
        )
        }

        <Routes>
        <Route index element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        {/*<Route path="/*" element={<Login user={user} setUser={setUser}/>}/> */}
        <Route element={<ProtectedRouted/>}>
            <Route path="/principal" element={<BuscadorCliente/>}/>
            <Route path="/Analisis" element={<Barchart/>}/>
            <Route path="/Tareas" element={<PaginaTareas2/>}/>
        </Route>
          <Route path='/ApiTareas' element={<PaginaApiTareas/>}/>
        </Routes>

       
       </div>
       
       </div> 
       
    )
  
}

export default AppNueva2; 
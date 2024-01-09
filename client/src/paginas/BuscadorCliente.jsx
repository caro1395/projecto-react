import { useState } from "react";
import axios from 'axios';
//import { Navigate } from "react-router-dom";

const BuscadorCliente=()=>{


    const [rucname,setRucname] = useState([0]);
    const [objetocliente,setObjetcliente] = useState([]);
    /*const handleLogout=()=>{
        setUser([])
    }*/


    const manejadorRucname=(e)=>{
        e.preventDefault();
        setRucname(e.target.value);
        console.log(rucname);
    }

    const manejadorSubmit=(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:4000/cartera/${rucname}`).
        then(response=>(
            setObjetcliente(response.data),
            console.log("se inserto correctamente"),
            console.log(objetocliente),
            console.log(Object.keys(objetocliente).length)

        ))
        .catch(error=>{
            console.log(error)
        })

    }

    return(
        <div>
            {/*!Object.keys(user).length>0?(<div><Navigate to="/Login"/></div>):()*/}
                <div className="container">
                <div className="row">
                    <div className="">
                    <p className="texto-centro">BIENVENIDO : {JSON.parse(sessionStorage.getItem('nombrerecibido')).responsable.toUpperCase()}</p>
                    <p className="texto2">Buscador Cliente </p>
                    <form  id="formulario" className="p-2 m-2 border border-3 shadow ancho" onSubmit={manejadorSubmit}>
                    <div className="form-group">
                        <label className="texto2">RUC</label>
                        <input type="texto2" className="form-control texto2" name="ruc" id="nombreruc"
                        onChange={manejadorRucname}/>
                    </div>
    
                    <div className="form-group ">
                        <button className="btn btn-primary p-2 m-2 texto2">Buscar</button>
                    </div>
                    </form>
                    {
                        Object.keys(objetocliente).length==61?
                        (
                    <div className="card card-body ancho texto2">
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Razon_Social  :  { objetocliente.RAZON_SOCIAL}</li>
                        <li className="list-group-item">Segmento_pais :  { objetocliente.SEGMENTO_PAIS}</li>
                        <li className="list-group-item">Segmento      :  { objetocliente.SEGMENTO}</li>
                        <li className="list-group-item">Subsegmento   :  { objetocliente.SUB_SEGMENTO}</li>
                        </ul>
                    </div>
                    ):(
                        Object.keys(objetocliente).length==0?
                        (<div>No se encontró ruc</div>)
                        :(<div>Ingrese Ruc</div>)

                    )

                    }
                
                    </div>
                    {/*
                    <div className="col-md-2">
                        <button  className="desloguearse" onClick={handleLogout}>
                            <p className="texto">Cerrar Sesion</p>
                            </button>
                    </div>
                    */}
               
                </div>
    
            </div>
            
        </div>




      

    )
}

export default BuscadorCliente;
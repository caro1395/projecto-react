import {Form,Formik} from 'formik';
import {useEffect, useState} from 'react';
import axios from 'axios';
import BuscadorCliente from './BuscadorCliente';

function PaginaFormulario2(){

    //const [cliente,setCliente] = useState([]);
    //const [resultado,setResultado] = useState([]);

    /*const buscandoCliente = async()=>{
        await 
    }
    */



   const [clientes,setClientes] = useState([]);

   useEffect(()=>{
    axios.get(`http://localhost:4000/cartera`).then(response=>(
        setClientes(response.data)
    ))
   },[])

    return(
<div>
    <div>
        <BuscadorCliente/>
    </div>
    <div className='container'>
       <p>Lista de Clientes: {clientes.length}</p>
       <table className='table table-hover'>
        <thead>
            <tr>
                <th>RUC</th>
                <th>SEGMENTO_PAIS</th>
                <th>SEGMENTO</th>
                <th>TIPO CLIENTE</th>
            </tr>
        </thead>

        <tbody>
            {
                clientes.map((cliente)=>(
                    <tr key={cliente.id}>
                        <td>{cliente.RUC}</td>
                        <td>{cliente.SEGMENTO_PAIS}</td>
                        <td>{cliente.SEGMENTO}</td>
                        <td>{cliente.TIPO_CLIENTE}</td>
                    </tr>
                ))
            }
        </tbody>


        </table>     
    </div>

    </div>

  
    )

}

export default PaginaFormulario2
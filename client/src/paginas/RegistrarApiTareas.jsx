import axios from "axios";
import { useState } from "react";

const RegistrarApiTareas=()=>{
    const [apitarea, setApitarea]=useState('');
    const [apiresponsable,setApiresponsable]=useState('');
    const [apidescripcion,setApidescripcion]=useState('');
    const [apientrega_a,setApientrega_a]=useState('')
    

    const manejadorApiTarea=(e)=>{
        setApitarea(e.target.value);
        console.log(apitarea)
    }

    const manejadorApiresponsable=(e)=>{
        setApiresponsable(e.target.value);
        console.log(apiresponsable)
    }

    const manejadorApidescripcion=(e)=>{
        setApidescripcion(e.target.value);
        console.log(apidescripcion)
    }

    const manejadorApientrega_a=(e)=>{
        setApientrega_a(e.target.value);
        console.log(apientrega_a)
    }

    const manejadorSubmitApi=()=>{
        const valoresApitarea ={
            tarea:apitarea,
            responsable:apiresponsable,
            entrega_a:apientrega_a,
            descripcion:apidescripcion
        }

        axios.post('http://localhost:5000/apitareas',valoresApitarea)
        .then(response=>{
                console.log('se inserto correctamente')
        })
        .catch(error=>{
            console.log(error)
        })

        window.location.reload();
    }

    return(
        <div className="container">
            <div className="row col-md-8">
                <p>Formulario de la Api Tarea</p>
                <form className="p-2 m-2 border border-3 shadow" onSubmit={manejadorSubmitApi}> 

                <div className="form-group">
                    <label>Tarea</label>
                    <input  type="text" className="form-control" name="nameTarea" id="idtarea" placeholder="Tarea" 
                    onChange={manejadorApiTarea}/>
                </div> 

                <div className="form-group">
                    <label>Responsable</label>
                    <input type="text" className="form-control" name="nameResponsable" id="idResponsable" placeholder="Responsable"
                    onChange={manejadorApiresponsable}/>
                </div>

                <div className="form-group">
                    <label>Entrega_a</label>
                    <input type="text" className="form-control" name="nameEntrega_a" id="idEntrega_a" placeholder="Entregar_a"
                    onChange={manejadorApientrega_a}/>
                </div>

                <div className="form-group">
                    <label>Descripción</label>
                    <input type="text" className="form-control" name="nameDescripcion" id="idDescripcion" placeholder="Descripción" 
                    onChange={manejadorApidescripcion}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary p-2 m-2">Registrar</button>
                </div>

                </form>

            </div>

        </div>
    )

}

export default RegistrarApiTareas;
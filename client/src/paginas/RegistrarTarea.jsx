import axios from "axios";
import { useState } from "react";

const RegistrarTarea=()=>{

    const [tarea,setTarea] = useState('');
    const [descripcion,setdescripcion] = useState('');
    const [responsable,setResponsable] = useState('');
    const [entrega_a,setEntrega_a] = useState('');

    const manejadorTarea=(e)=>{
        e.preventDefault();
        setTarea(e.target.value);
        console.log(tarea)
    }

    const manejadorDescripcion=(e)=>{
        e.preventDefault();
        setdescripcion(e.target.value);
        console.log(descripcion)
    }

    const manejadorResponsable=(e)=>{
        e.preventDefault();
        setResponsable(e.target.value);
        console.log(responsable)
    }

    const manejadorEntrega_a=(e)=>{
        e.preventDefault();
        setEntrega_a(e.target.value);
        console.log(entrega_a)
    }

    const manejadorSubmit=()=>{
        e.preventDefault();
        const ValoresTarea={
            tarea:tarea,
            desccripcion:descripcion,
            responsable:responsable,
            Entrega_a:entrega_a
        }    
        axios.post('http://localhost:4000/tareas',ValoresTarea)
        .then(response=>{
            console.log("se inserto correctamente")
        })
        .catch(error=>{
            console.log(error)
        })
        window.location.reload();
    }

    const limpiarcamposconelid=()=>{
        document.getElementById().value='idtarea';
        document.getElementById().value='idDescripcion';
        document.getElementById().value='idResponsable';
        document.getElementById().value='idEntrega_a'

    }


    return(
        <div className="container">
            <div className="row col-md-8">
                <p className="lead fs-5 fw-bolder">Registrar Nueva Tarea</p>
            <form className="p-2 m-2 border border-3 shadow" onSubmit={manejadorSubmit}>
                <div className="form-group">
                    <label>Tarea</label>
                    <input type="text" className="form-control" name="nameTarea" id="idtarea" placeholder="Tarea" 
                    onChange={manejadorTarea}/>
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input type="text" className="form-control" name="nameDescripcion" id="idDescripcion" placeholder="Descripción" 
                    onChange={manejadorDescripcion}/>
                </div>
                <div className="form-group" >
                    <div className="form-group col-md-6">
                    <label>Responsable</label>
                    <input type="text" className="form-control" name="nameResponsable" id="idResponsable" placeholder="Responsable"
                    onChange={manejadorResponsable}/>
                    </div>
                    <div className="form-group col-md-6">
                    <label>Entrega_a</label>
                    <input type="text" className="form-control" name="nameEntrega_a" id="idEntrega_a" placeholder="Entrega_a"
                    onChange={manejadorEntrega_a}/>
                    </div>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary p-2 m-2">Registrar</button>
                </div>
              
            
                
            </form>
            </div>

        </div>
    )

}

export default RegistrarTarea;
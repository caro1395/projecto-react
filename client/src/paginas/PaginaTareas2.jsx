import axios from "axios";
import { useEffect, useState } from "react";
import RegistrarTarea from "./RegistrarTarea";


const PaginaTareas2=()=>{
    const [tareas,setTareas]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/tareas')
        .then(response=>(
            setTareas(response.data)
        ))

    },[])

const manejadorEliminar=(id)=>{
    const mensajeconfirmar = window.confirm('¿desea eliminar el registro?');
    if(mensajeconfirmar){
        axios.delete(`http://localhost:4000/tareas/${id}`)
        .then(response=>{
            listar()

        }

        )
    }

}

const listar=()=>{
    axios.get('http://localhost:4000/tareas')
    .then(
        response=>{
            setTareas(response.data)
        }
    )
}

const manejadorEditar=(tarea)=>{
    document.getElementById('idEditar').value=tarea.id;
    document.getElementById('nombreidEditar').value=tarea.tarea;
    document.getElementById('responsableidEditar').value=tarea.responsable;
    document.getElementById('entregar_aidEditar').value=tarea.Entrega_a;
    document.getElementById('descripcionidEditar').value=tarea.desccripcion

}

const manejadorActualizar=()=>{
    const id = document.getElementById('idEditar').value;
    const tareaobjeto={
        tarea: document.getElementById('nombreidEditar').value,
        desccripcion:document.getElementById('descripcionidEditar').value,
        responsable:document.getElementById('responsableidEditar').value,
        entrega_a:document.getElementById('entregar_aidEditar').value

    }
    axios.put(`http://localhost:4000/tareas/${id}`,tareaobjeto)
    .then(response=>{
        console.log('se actualizo correctamente',response.data);
        listar();
    })

}

    return(
        <div>
        <RegistrarTarea/>
        <hr/>
        <div className="container">
            <h2>Lista de Tareas : {tareas.length}</h2>
            <hr/>
            <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tarea</th>
                        <th>Descripcion</th>
                        <th>Responsable</th>
                        <th>Entrega_a</th>
                        <th>Editar</th>
                        <th>Eliminar</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        tareas.map((tarea)=>(
                            <tr key={tarea.id}>
                                <td>{tarea.id}</td>
                                <td>{tarea.tarea}</td>
                                <td>{tarea.desccripcion}</td>
                                <td>{tarea.responsable}</td>
                                <td>{tarea.Entrega_a}</td>
                                <td>
                                    {/*Modal para editar */}
                                    <button type="button" className="btn btn-info m-1" data-bs-toggle="modal" 
                                    data-bs-target="#modalid" onClick={()=>manejadorEditar(tarea)}>
                                    Editar
                                    </button>
                                </td>
                                <td><button className="btn btn-danger m-1" onClick={()=>manejadorEliminar(tarea.id)}>Eliminar</button></td>
                            </tr>

                        ))
                    }
                </tbody>
                
            </table>
            </div>
         
            {/*A partir de esta línea se va  crear una modal del editar tarea*/}
            


            <div className="modal fade" id="modalid" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form onSubmit={manejadorActualizar}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Actualizar Tarea</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="hidden" id="idEditar"/>
                                </div>

                                <div className="form-group">
                                    <label>Tarea1</label>
                                    <input type="text" id="nombreidEditar" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Responsable</label>
                                    <input type="text" id="responsableidEditar" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Entregar_a</label>
                                    <input type="text" id="entregar_aidEditar" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea className="form-control" id="descripcionidEditar"></textarea>
                                </div>
                            </div>

                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>   
                                <button type="submit" className="btn btn-primary">Editar</button>
                            </div>

                        </div>
                    </form>

                </div>

            </div>
           
        </div>
        </div>
    )
}

export default PaginaTareas2;
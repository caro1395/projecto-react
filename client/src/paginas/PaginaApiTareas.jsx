import axios from "axios";
import { useEffect, useState } from "react";
import RegistrarApiTareas from "./RegistrarApiTareas";

const PaginaApiTareas=()=>{
    const count=0;
    const [apitareas,setApitareas]=useState([]);
    useEffect(()=>{
        listar();

    },[]);

    const listar=()=>{
        axios.get('http://localhost:5000/apitareas')
        .then(
            response=>{
                setApitareas(response.data)
            }
        )
    }

    const manejadorEliminarapi=(id)=>{
        const mensajedeconfirmacion=window.confirm('¿Deseo eliminar?')
        if(mensajedeconfirmacion){
        axios.delete(`http://localhost:5000/apitareas/${id}`)
        .then(response=>{
            listar()
        }

        )
    }
    }

    const manejadorEditarapi=(apitareas)=>{
        document.getElementById('idapiEdidar').value=apitareas.id,
        document.getElementById('idapitareaEditar').value=apitareas.tarea,
        document.getElementById('idapiresponsableEditar').value=apitareas.responsable,
        document.getElementById('idapientrega_aEditar').value=apitareas.entrega_a,
        document.getElementById('idapiDescripcion').value=apitareas.descripcion
    }

    const manejadorActualizarapi=()=>{
        const id = document.getElementById('idapiEdidar').value;
        const tareaobjetoid = {
            tarea:document.getElementById('idapitareaEditar').value,
            responsable:document.getElementById('idapiresponsableEditar').value,
            entrega_a:document.getElementById('idapientrega_aEditar').value,
            descripcion:document.getElementById('idapiDescripcion').value
        }
        axios.put(`http://localhost:5000/apitareas/${id}`,tareaobjetoid)
        .then(response=>{
            console.log('Se actualizó correctamente',response.data);
            listar()
        }

        )
    }
    

    return(
        <div>
            <RegistrarApiTareas/>
            <hr/>
            <p>Tendremos la lista de tareas</p>
            {apitareas.length}
            <hr/>
            <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Tarea</th>
                <th scope="col">Responsable</th>
                <th scope="col">Entrega_a</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>


                </tr>
            </thead>
            <tbody>
                {
                    apitareas.map((apitarea)=>(
                        <tr key={apitarea.id}>

                        <td scope="row">{apitarea.id}</td>
                        <td>{apitarea.tarea}</td>
                        <td>{apitarea.responsable}</td>
                        <td>{apitarea.entrega_a}</td>
                        <td>{apitarea.descripcion}</td>
                        <td>
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalapiid" onClick={()=>manejadorEditarapi(apitarea)}>
                             Editar</button></td>
                        <td>
                            <button  className="btn btn-danger" onClick={()=>manejadorEliminarapi(apitarea.id)}>
                             Eliminar</button>
                        </td>


                        </tr>

                    ))
                }
               
               
            </tbody>
            </table>
        </div>
        {/*Aqui empezamos a hacer el codigo de la modal para editar */}

        <div className="modal fade" id="modalapiid" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form onSubmit={manejadorActualizarapi}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-tittle">Modificar Tarea</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <input type="hidden" id="idapiEdidar"/>
                            </div>
                            <div className="form-group">
                                <label>Tarea</label>
                                <input type="text" id="idapitareaEditar" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Responsable</label>
                                <input type="text" id="idapiresponsableEditar" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Entregar_a</label>
                                <input type="text" id="idapientrega_aEditar" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Descripcion</label>
                                <textarea type="text" id="idapiDescripcion" className="form-control"/>
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
    )

}
export default PaginaApiTareas;
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BuscadorCliente from "./BuscadorCliente";
import Imagen1 from '../assets/Imagen1.jpg'
import Imagen2 from '../assets/MAIA2.png'

//import md5 from "md5";

function Login() {

    const [formulario,setFormulario]=useState({ usuario:'',clave:''});
    const baseUrl='http://localhost:4000/tareas';
    const [nombrerecibido1,setnombrerecibido1]=useState([]);

        const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormulario({
            ...formulario,
            [name]:value
        });
        console.log(formulario)
    };

    const formulario1 = useRef();

    const iniciarSession=async()=>{
        await axios.get(baseUrl+`/${formulario.usuario}/${formulario.clave}/`)
        .then(response=>{
        //    console.log(Object.keys(response.data).length)
        //    console.log(response.data)
            if ((Object.keys(response.data).length)>0) {
                //console.log('usuario correcto'),
            //    setUser(response.data);
                sessionStorage.setItem('nombrerecibido',JSON.stringify(response.data));
               // console.log(JSON.parse(sessionStorage.getItem('nombrerecibido')));
                console.log(response.data);
                console.log(JSON.parse(sessionStorage.getItem('nombrerecibido')));


            //    formulario1.current.reset();
        //   window.location.href="./bienvenido"
          } else {
               // return(BuscadorCliente),
              // setUser([]);
                console.log('usuario incorrecto')
            }
        })
        .catch(error=>{
            console.log(error)
        })
        window.location.reload();

    }

  

//!Object.keys(nombrerecibido1).length>0?

return(  
<div>

{        
    !JSON.parse(sessionStorage.getItem('nombrerecibido'))?
(
    <div className="container">
<div className="row">
    <div className="col-md-6">
        <div className="padre">
            <div className="card card-body">
            <img src={Imagen2} alt="" className="estilo-profile"/>

                <form ref={formulario1}>
                    <div className="">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Ingresa usuario" id="exampleInputEmail1" name="usuario" onChange={handleChange}/>
                    </div>

                    <div className="">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Ingresa contraseña" id="exampleInputPassword1" name="clave" onChange={handleChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={iniciarSession}>Submit</button>
                    
                </form>
            </div>
        </div>
        
    </div>
    
    <div className="col-md-6">
        <img src={Imagen1} alt="" className="tamaño-imagen"/>
    </div>


</div>
</div>
)
:
(<div className=" container texto-centro">
    <h4>Bienvenido usuario {JSON.parse(sessionStorage.getItem('nombrerecibido')).responsable} ya puedes interactuar con la página</h4>
</div>)

}
</div>

)
}
    

export default Login;
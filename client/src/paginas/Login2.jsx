import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Imagen1 from '../assets/Imagen1.jpg'
import Imagen2 from '../assets/MAIA2.png'

//import md5 from "md5";

function Login2() {

    const [formulario,setFormulario]=useState({ usuario:'',clave:''});
    const baseUrl='http://localhost:4000/tareas';
    const [nombrerecibido1,setnombrerecibido1]=useState([]);
    const [user,setUser] = useState([]);

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
                setUser(response.data);
               // sessionStorage.setItem('nombrerecibido',JSON.stringify(user));
               console.log(user);
               sessionStorage.setItem('nombrerecibido',JSON.stringify(response.data));
             //  setnombrerecibido1(getdata());
               const localstoretexto =sessionStorage.getItem('nombrerecibido');
               //const localstoretexto1 =JSON.parse(localstoretexto)
               setnombrerecibido1(JSON.parse(localstoretexto));
               console.log(response.data);
               console.log( nombrerecibido1.length);
               console.log(JSON.parse(sessionStorage.getItem('nombrerecibido')))

         //descomentar      console.log(nombrerecibido1)
             //   formulario1.current.reset();
        //   window.location.href="./bienvenido"
          } else {
               // return(BuscadorCliente),
               setnombrerecibido1([]);
             //  setUser([]);
                console.log('usuario incorrecto')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
/*
    useEffect(() => {
        setnombrerecibido1(getdata());
    
    }, []);
*/
    
   
    
    const getdata=()=>{
        const localstoretexto =sessionStorage.getItem('nombrerecibido');
        setnombrerecibido1(JSON.parse(localstoretexto));
        const localstoretexto2=JSON.parse(localstoretexto);
        console.log(JSON.parse(localstoretexto));
       console.log( Object.keys(nombrerecibido1).length)
       // return JSON.parse(localstoretexto)
       return(nombrerecibido1)
    }


    const handleLogout=()=>{
        //   setUser([]);
      //     setUser([]);
      sessionStorage.removeItem('nombrerecibido');
           setnombrerecibido1([])
       };



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
    <hr/>
    <div>
            <button className='desloguearse' onClick={handleLogout}>LogOut</button>
        </div>

</div>)

}
</div>

)
}
    

export default Login2;
import { useState } from "react";
import MostrarNombre from "./MostrarNombre";

const Prueba=()=>{

    const [nombre,setNombre] = useState('');
    const [savedata,setSavedata] = useState(false);

    const manejadorNombre=(e)=>{
        //e.preventDefault();
        const text=e.target.value;
        setNombre(text);
        console.log(nombre);

        if(text.length===0){
            setSavedata(false);
        };
        
      //  console.log(nombre.length);
       

    }

    const guardarNombre=()=>{
        localStorage.setItem('nombrerecibido',nombre);
    //    
        setSavedata(true);
        console.log('nombre se guardó en localstore');

      //  console.log(nombre);
      //  location.reload();

    }

    return(
        <div className="container">
            <div>
            <label className="texto">nombre</label>
            <input type="texto" className="form-control " name="namenombre" id="idnombre" 
            onChange={manejadorNombre}/>
            <div className="">
                <button className="btn btn-primary p-2 m-2 " onClick={guardarNombre}>Buscar</button>
            </div>
            </div>

            <div>
               {<MostrarNombre/>}     
            
             

            </div>
        </div>





    )

}
export default Prueba;
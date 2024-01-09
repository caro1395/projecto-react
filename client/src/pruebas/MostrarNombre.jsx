import { useEffect, useState } from "react";

const MostrarNombre=()=>{

const [nombrerecibido,setNombrerecibido]=useState('');

const getdata=()=>{
    return localStorage.getItem('nombrerecibido');
}

useEffect(()=>{
    setNombrerecibido(getdata());

},[])




    return(
        <div>
            Hola {nombrerecibido}
            {/*
               {nombrerecibido.length>0?(
                    <div>
                        hola {nombrerecibido}
                    </div>
                ):(
                    <div></div>
                )}    */}
          

        </div>
    )

}

export default MostrarNombre;
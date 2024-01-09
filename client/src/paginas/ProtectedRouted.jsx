import { Children, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouted=({children,redirecTo="/Login"})=>{
    
return(
    <>
    {
       !JSON.parse(sessionStorage.getItem('nombrerecibido'))?
        (
            <div>
                <Navigate to={redirecTo}/>
            </div>
        )
        :
       (children?children:<Outlet/>)
    }
    </>
)

}
export default ProtectedRouted;
import { Link } from "react-router-dom";

function Navbar() {
    return(
        

        <div className="">
       {/*<h3 className="texto  text-center">Menú</h3>*/} 
        
          <Link to="/Login" className="btn btn-info m-1">Login</Link>
            <Link to="/principal" className="btn btn-info m-1">Buscador_Cliente</Link>
            <Link to="/Analisis" className="btn btn-info m-1">Analisis</Link>
            <Link to="/Tareas" className="btn btn-info m-1" >Tareas</Link>
        <Link to="/ApiTareas" className="btn btn-info m-1" >Api-Tareas</Link>   

            
        </div>
/*
        <div className="d-flex flex-column justify-content-start centrar-div">
        <h3 className="texto p-4 text-center">Menú</h3>
            <Link to="/Login" className="btn btn-info m-1">Login</Link>
            <Link to="/principal" className="btn btn-info m-1">Buscador_Cliente</Link>
            <Link to="/bienvenido" className="btn btn-info m-1">Bienvenido</Link>
        </div>
*/
        

/*
<div className="d-flex flex-column justify-content-start centrar-div">
<h3 className="texto p-4 text-center">Menú</h3>
    <Link to="/Login" className="btn btn-info m-1">Login</Link>
    <Link to="/principal" className="btn btn-info m-1">Buscador_Cliente</Link>
    <Link to="/bienvenido" className="btn btn-info m-1">Bienvenido</Link>
</div>




        /*
        <div>
            <h3 className="texto p-4">Menú</h3>
            <ul>
                <li>
                <Link to="/Login" className="btn btn-info">Login</Link>
                </li>

                <li>
                    <Link to="/principal" className="btn btn-info">Buscador_Cliente</Link>
                </li>

                <li>
                    <Link to="/bienvenido" className="btn btn-info">Bienvenido</Link>
                </li>

            </ul>
        </div>
        */
    )
    
}

export default Navbar;
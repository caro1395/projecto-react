import BuscadorCliente from "./paginas/BuscadorCliente"
import Login from "./paginas/Login"
//import {Route,Routes} from 'react-router-dom'
import { useState } from "react";
import {Route,Routes} from 'react-router-dom'
//import PaginaNoEncontrada from "./paginas/PaginaNoEncontrada";

function AppNueva() {
  //const [count, setCount] = useState(0)
  const [user,setUser]=useState([])

  return (
<div>

    {
!Object.keys(user).length>0
?<Login setUser={setUser}/>
:<BuscadorCliente user={user} setUser={setUser}/>
}

{
  /*
  <Routes>
    {
     !Object.keys(user).length>0?(
        <Route path="/" element={<Login setUser={setUser}/>}/>)
        :(<Route path="/principal" element={<BuscadorCliente user={user} setUser={setUser}/>}/>)
    }
    </Routes>
    */
}

  


  {/*
!Object.keys(user).length>0
?<Login setUser={setUser}/>
:<BuscadorCliente user={user} setUser={setUser}/>
*/}
</div>

    /*
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/principal" element={<BuscadorCliente/>}/>
        </Routes>
     </>
     */
    

   //<Login/>
    /*
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>   
      </div>
  */
    
            

     
     
    
  )
}

export default AppNueva

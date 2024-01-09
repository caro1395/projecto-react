import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import PaginaTareas from './paginas/paginaTareas'
import PaginaFormulario from './paginas/PaginaFormulario'
import PaginaNoEncontrada from './paginas/PaginaNoEncontrada'
import Navbar from './componentes/Navbar'
import PaginaFormulario2 from './paginas/PaginaFormulario2'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<PaginaTareas />}/>
        <Route path="/formulario" element={<PaginaFormulario/>}/>
        <Route path="/formulario2" element={<PaginaFormulario2/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='*' element={<PaginaNoEncontrada/>} />
      </Routes>
      </>
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

export default App

import { Default } from './componentes/Default'
import { Usuarios } from './componentes/Usuarios'
import { Roles } from './componentes/Roles'
import { Ciudad } from './componentes/Ciudad'
import { Pais } from './componentes/Pais'
import { Foto } from './componentes/Foto'
import { Inicio } from './componentes/Inicio'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Factura } from './componentes/Factura'


function App() {
  
  return (
    <>  
        <Menu />
        <Routes>
          <Route path='/' element={ <Inicio />}  ></Route>
          <Route path='/Usuarios' element={ <Usuarios />}  ></Route>
          <Route path='/Factura' element={ <Factura />}  ></Route>
          <Route path='/roles' element={ <Roles />}  ></Route>
          <Route path='/ciudad' element={ <Ciudad />}  ></Route>
          <Route path='/pais' element={ <Pais />}  ></Route>
          <Route path='/foto' element={ <Foto />}  ></Route>
          <Route path='*' element={ <Default />}  ></Route>
        </Routes>
      
    </>
  )
}

export default App

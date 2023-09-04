import { Default } from './componentes/Default'
import { Usuarios } from './componentes/Usuarios'
import { Roles } from './componentes/Roles'
import { Ciudad } from './componentes/Ciudad'
import { Pais } from './componentes/Pais/Pais'
import { Inicio } from './componentes/Inicio'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'

import { Direccion} from './componentes/Direccion/Direccion'


function App() {

  return (
    <>  
        <Menu />
        <Routes>
          <Route path='/' element={ <Inicio />}  ></Route>
          <Route path='/usuarios' element={ <Usuarios />}  ></Route>
          <Route path='/roles' element={ <Roles />}  ></Route>
          <Route path='/ciudad' element={ <Ciudad />}  ></Route>
          <Route path='/pais' element={ <Pais />}  ></Route>
          <Route path='/direccion' element={ <Direccion />}  ></Route>
          <Route path='*' element={ <Default />}  ></Route>
        </Routes>
      
    </>
  )
}

export default App

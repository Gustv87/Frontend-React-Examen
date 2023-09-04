import { Default } from './componentes/Default'
import { Usuarios } from './componentes/Usuarios'
import { Roles } from './componentes/Roles'
import { Ciudad } from './componentes/Ciudad'
import { Inicio } from './componentes/Inicio'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Direccion } from './componentes/Direccion/Direccion'
import { Pais } from './componentes/Pais/Pais'


function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />}  ></Route>
        <Route path='/usuarios' element={<Usuarios />}  ></Route>
        <Route path='/roles' element={<Roles />}  ></Route>
        <Route path='/ciudad' element={<Ciudad />}  ></Route>
        <Route path='/pais' element={<Pais />}  ></Route>
        <Route path='*' element={<Default />}  ></Route>
        <Route path='/direccion' element={< Direccion />}  ></Route>
      </Routes>

    </>
  )
}

export default App

import { Default } from './componentes/Default'
import { Login } from './componentes/login/login'
import { Usuarios } from './componentes/Usuario/Usuarios'
import { Roles } from './componentes/Roles'
import { Ciudad } from './componentes/Ciudad/Ciudad'
import { Pais } from './componentes/Pais/Pais'
import { Productos } from './componentes/Productos/Productos'
import { Catalogo } from './componentes/Catalogo/Catalogo'
import { Inicio } from './componentes/Inicio/Inicio'
import { FacturaDetalle } from './componentes/FacturaDetalle'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Direccion } from './componentes/Direccion/Direccion'
import { Factura } from './componentes/Factura'
import { useState } from 'react';


function App() {


  const [inicioSesion, setInicioSesion] = useState(false);
  const [id_rol, setId_rol] = useState(0);


  const onInicioSesion = (val) => {
    console.log(val);
    setId_rol(val);
    setInicioSesion(val);
  }




  return (
    <>


      {inicioSesion && <Menu auth={id_rol}/>}

      <Routes>

        {inicioSesion == false && <Route path='/' element={<Login dataSesion={onInicioSesion} />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/' element={<Inicio />}   ></Route>}
        {inicioSesion && id_rol == 2 && <Route path='/' element={<Catalogo />}   ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/usuarios' element={<Usuarios />}   ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/roles' element={<Roles />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/ciudad' element={<Ciudad />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/pais' element={<Pais />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/direccion' element={<Direccion />}  ></Route>}
        {inicioSesion && id_rol == 1 && <Route path='/factura' element={<Factura />}  ></Route>}
        {inicioSesion && id_rol == 2 && <Route path='/facturadetalle' element={<FacturaDetalle />}  ></Route>}
        {inicioSesion && id_rol == 2 && <Route path='/productos' element={<Productos />}  ></Route>}
        {inicioSesion && id_rol == 2 && <Route path='/catalogo' element={<Catalogo />}  ></Route>}
        {inicioSesion && <Route path='*' element={<Default />}  ></Route>}
        {inicioSesion == false && <Route path='*' element={<Login />}  ></Route>}

      </Routes>
    </>
  );
}

export default App;

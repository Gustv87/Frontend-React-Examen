import { Default } from './componentes/Default'
import { Login } from './componentes/login/login'
import { Usuarios } from './componentes/Usuarios'
import { Roles } from './componentes/Roles'
import { Ciudad } from './componentes/Ciudad/Ciudad'
import { Pais } from './componentes/Pais/Pais'
import { Productos } from './componentes/Productos'
import { Inicio } from './componentes/Inicio'
import { FacturaDetalle } from './componentes/FacturaDetalle'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Direccion } from './componentes/Direccion/Direccion'
import { Factura } from './componentes/Factura'
import { Comprar } from './componentes/Comprar'
import { useState } from 'react';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const [inicioSesion , setInicioSesion] = useState(false);

  const onInicioSesion = (val) =>{
    setInicioSesion(val);
  }


  return (
    <>

      
      
      { inicioSesion && <Menu /> }
      
      <Routes>

      { inicioSesion ==false && <Route path='/' element={<Login dataSesion = {onInicioSesion}  />}  ></Route> }
      { inicioSesion &&  <Route path='/' element={<Inicio />}   ></Route> }    
       { inicioSesion &&  <Route path='/usuarios' element={<Usuarios />}   ></Route> }
       { inicioSesion && <Route path='/roles' element={<Roles />}  ></Route> }
       { inicioSesion && <Route path='/ciudad' element={<Ciudad />}  ></Route> }
       { inicioSesion && <Route path='/pais' element={<Pais />}  ></Route> }
       { inicioSesion && <Route path='/direccion' element={<Direccion />}  ></Route> }
       { inicioSesion && <Route path='/factura' element={<Factura />}  ></Route> }
       { inicioSesion && <Route path='/facturadetalle' element={<FacturaDetalle />}  ></Route>}
       { inicioSesion && <Route path='/productos' element={<Productos />}  ></Route>}
       { inicioSesion && <Route path='/comprar' element={<Comprar />}  ></Route>}
        
  
     
        { inicioSesion && <Route path='*' element={<Default />}  ></Route>}
        { inicioSesion==false && <Route path='*' element={<Login />}  ></Route>}

      </Routes>

    </>
  );
}


export default App;

import { Default } from './componentes/Default'
import { Login } from './componentes/login/login'
import { Usuarios } from './componentes/Usuarios'
import { Roles } from './componentes/Roles'
import { Ciudad } from './componentes/Ciudad'
import { Pais } from './componentes/Pais/Pais'
import { Productos } from './componentes/Productos'
import { Inicio } from './componentes/Inicio'
import { FacturaDetalle } from './componentes/FacturaDetalle'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Direccion } from './componentes/Direccion/Direccion'
import { Foto } from './componentes/Foto'
import { Factura } from './componentes/Factura'
import { Header } from './componentes/Carrito/Header';
import { ProductList } from './componentes/Carrito/ProductoLista';

import { useState } from 'react';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const [inicioSesion , setInicioSesion] = useState(false);


  <>
    <Header
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
    />
    <ProductList
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
    />
  </>

  return (
    <>

      
      
      { inicioSesion && <Menu /> }
      
      <Routes>

      { inicioSesion ==false && <Route path='/' element={<Login dataSesion = {setInicioSesion}  />}  ></Route> }
      { inicioSesion &&  <Route path='/' element={<Inicio />}   ></Route> }    
       { inicioSesion &&  <Route path='/usuarios' element={<Usuarios />}   ></Route> }
       { inicioSesion && <Route path='/roles' element={<Roles />}  ></Route> }
       { inicioSesion && <Route path='/ciudad' element={<Ciudad />}  ></Route> }
       { inicioSesion && <Route path='/pais' element={<Pais />}  ></Route> }
       { inicioSesion && <Route path='/direccion' element={<Direccion />}  ></Route> }
       { inicioSesion && <Route path='/factura' element={<Factura />}  ></Route> }
       { inicioSesion && <Route path='/facturadetalle' element={<FacturaDetalle />}  ></Route>}
       { inicioSesion && <Route path='/productos' element={<Productos />}  ></Route>}
        
        {/* <Route path='/producto' element={<ProductoLista />}  ></Route> */}
        { inicioSesion && <Route path='/header' element={<Header />}  ></Route>}
        { inicioSesion && <Route path='*' element={<Default />}  ></Route>}
        { inicioSesion==false && <Route path='*' element={<Login />}  ></Route>}

      </Routes>

    </>
  );
}


export default App;

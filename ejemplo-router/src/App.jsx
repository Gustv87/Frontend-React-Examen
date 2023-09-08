import { Default } from './componentes/Default'
import  {Login}  from './componentes/login/login'
import { Usuarios } from './componentes/Usuarios'
import { Roles } from './componentes/Roles'
import { Ciudad } from './componentes/Ciudad'
import { Pais } from './componentes/Pais/Pais'
import { Productos } from './componentes/Productos'
import { Inicio } from './componentes/Inicio'
import { FacturaDetalle } from './componentes/FacturaDetalle'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Direccion} from './componentes/Direccion/Direccion'
import { Foto } from './componentes/Foto'
import { Factura } from './componentes/Factura'
import { Header } from './componentes/Carrito/Header';
import { ProductList } from './componentes/Carrito/ProductoLista';





function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);


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
        <Menu />
        <Routes>
         
          <Route path='/' element={ <Inicio />}  ></Route>
          <Route path='/login' element={ <Login />}  ></Route>
          <Route path='/usuarios' element={ <Usuarios />}  ></Route>
          <Route path='/roles' element={ <Roles />}  ></Route>
          <Route path='/ciudad' element={ <Ciudad />}  ></Route>
          <Route path='/pais' element={ <Pais />}  ></Route>
          <Route path='/direccion' element={ <Direccion />}  ></Route>
          <Route path='/factura' element={ <Factura />}  ></Route>
          <Route path='/facturadetalle' element={ <FacturaDetalle />}  ></Route>
          <Route path='/productos' element={ <Productos />}  ></Route>
          <Route path='/foto' element={ <Foto />}  ></Route>
		  <Route path='/producto' element={ <ProductoLista/>}  ></Route>
          <Route path='/header' element={ <Header />}  ></Route>
	      <Route path='*' element={ <Default />}  ></Route>
        </Routes>
      
    </>
  )
}


export default App;

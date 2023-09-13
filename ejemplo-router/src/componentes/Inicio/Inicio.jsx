import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Inicio.css';

export const Inicio = () => {




  return (
    <>
      

      <div className="card-container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\usuario.png"/>
          <Card.Body>
          <Nav.Link as={Link} to="/Usuarios">Usuarios</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\roles.png"/>
          <Card.Body>
          <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\ciudad.png" />
          <Card.Body>
          <Nav.Link as={Link} to="/ciudad">Ciudades</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\pais.png"/>
          <Card.Body>
          <Nav.Link as={Link} to="/pais">Pais</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\direccion.png"/>
          <Card.Body>
          <Nav.Link as={Link} to="/direccion">Direccion</Nav.Link>
          </Card.Body>
        </Card>
        </div>
        <div className="card-container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\factura.png"/>
          <Card.Body>
          <Nav.Link as={Link} to="/factura">Factura</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\invoice.png"/>
          <Card.Body>
          <Nav.Link as={Link} to="/facturadetalle">Detalle de Factura</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\producto.png" />
          <Card.Body>
          <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\catalog.png"/>
          <Card.Body>
          <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src=".\src\assets\InicioImg\carrito.png"/>
          <Card.Body>
          <Card.Link href="/carrito">Carrito</Card.Link>
          </Card.Body>
        </Card>
        </div>


    </>
  )
}

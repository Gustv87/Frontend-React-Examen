import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

export const Menu = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
            <Container className="">
                <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ms-auto mb-2 mb-lg-0">
                        

                        <Nav.Link as={Link} to="/Usuarios">Usuarios</Nav.Link>
                        <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
                        <Nav.Link as={Link} to="/ciudad">Ciudades</Nav.Link>
                        <Nav.Link as={Link} to="/pais">Pais</Nav.Link>
<<<<<<< HEAD
                        <Nav.Link as={Link} to="/Factura">Factura</Nav.Link>
=======
                        <Nav.Link as={Link} to="/factura">Factura</Nav.Link>
                        <Nav.Link as={Link} to="/foto">Foto</Nav.Link>
>>>>>>> 464659f1d80ab3e5db959e855bb2c7f34309735f
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            
        </>
    )
}

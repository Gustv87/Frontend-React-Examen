import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export const Menu = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        

                        <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
                        <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
                        <Nav.Link as={Link} to="/ciudad">Ciudades</Nav.Link>
                        <Nav.Link as={Link} to="/pais">Pais</Nav.Link>
                        <Nav.Link as={Link} to="/direccion">Dirección</Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
        </>
    )
}

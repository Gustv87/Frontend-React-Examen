import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import "./Menu.css";

export const Menu = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">
            <img alt="" src=".\src\assets\medalla.png" width="30" height="30" className="d-inline-block align-top"
            />{' '}
            DLUJO Store
          </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ms-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/Usuarios">Usuarios</Nav.Link>
              <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
              <Nav.Link as={Link} to="/ciudad">Ciudades</Nav.Link>
              <Nav.Link as={Link} to="/pais">Pais</Nav.Link>
              <Nav.Link as={Link} to="/direccion">Direccion</Nav.Link>
              <Nav.Link as={Link} to="/factura">Factura</Nav.Link>
              <Nav.Link as={Link} to="/facturadetalle">Detalle de Factura</Nav.Link>
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

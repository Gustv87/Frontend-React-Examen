import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Menu2 = () => {
  return (
    <>      
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      
      <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ms-auto mb-2 mb-lg-0">
          <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}




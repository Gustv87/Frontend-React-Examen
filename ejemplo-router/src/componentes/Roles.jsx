import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import onSubmit from 'react-bootstrap/Button'

var url = "http://localhost:3000/api/rol";

export const Roles = () => {

  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState("");


  const getRol = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos del servidor');
      }
      const data = await response.json();

      setDatos(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRol();
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const postRol = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre }), // Enviar el nombre como JSON al servidor
      });

      if (!response.ok) {
        throw new Error('Error al enviar datos al servidor');
      }


      getRol();

      // Limpiar el campo de nombre después de enviar
      setNombre("");
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <Container fluid="md">
        <Col className='justify-content-md-center'>
          <h1 className='text-center p-3'>Ingresar Rol</h1>
        </Col>

        <Row  className='justify-content-md-center' >
          <Col className='col-sm-12 col-lg-6' >
          <form onSubmit={postRol}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear País
          </button>
          <br /><br />
        </form>

          </Col>

        </Row>
      </Container>


      <Container fluid="md mt-5">

        <Row className='justify-content-md-center '>
          <h1 className='text-center p-3'>Reporte de Roles</h1>
          <Col className='col-lg-6 col-sm-12'>

            <Table striped bordered hover>
              <thead className='table-dark'>
                <tr>
                  <th className='text-center'>ID</th>
                  <th className='text-center'>NOMBRE ROL</th>
                </tr>
              </thead>
              <tbody>
                {datos.map(x => <tr key={x.id_rol}><td>{x.id_rol}</td><td>{x.nombre}</td></tr>)}
              </tbody>
            </Table></Col>
        </Row>
      </Container>

    </>
  )
}

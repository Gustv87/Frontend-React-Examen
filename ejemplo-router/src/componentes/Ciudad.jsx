import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const url = "http://localhost:3000/api/ciudad";

export const Ciudad = () => {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [nombrePais, setNombrePais] = useState('');
  const [paises, setPaises] = useState([]);

  const getCiudad = async () => {
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

  const fetchCountries = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/pais"); // Adjust the URL to your API endpoint for countries
      if (!response.ok) {
        throw new Error('Error al obtener datos de países');
      }
      const data = await response.json();
      setPaises(data);
    } catch (error) {
      console.error(error);
    }
  };

  const postCiudad = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre }), 
      });

      if (!response.ok) {
        throw new Error('Error al enviar datos al servidor');
      }

      getCiudad();
      setNombre("");
      setNombrePais("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCiudad();
    fetchCountries();
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={6} className="mb-4">
          <div className="p-4 border rounded">
            <h1 className="text-center mb-3"> Ciudad</h1>
            <Form onSubmit={postCiudad}>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar Ciudad"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPais">
                <Form.Label>País</Form.Label>
                <Form.Control
                  as="select"
                  value={nombrePais}
                  onChange={(e) => setNombrePais(e.target.value)}
                >
                  <option value="">Seleccionar País</option>
                  {paises.map((pais) => (
                    <option key={pais.id} value={pais.nombre}>
                      {pais.nombre}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Aceptar
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <h2 className="text-center mb-3">Reporte</h2>
          <Table striped bordered hover>
            <thead className='table-dark'>
              <tr>
                <th className='text-center'>Id</th>
                <th className='text-center'>Nombre Ciudad</th>
                <th className='text-center'>Nombre Pais</th>
                <th className='text-center'>Acciones</th> {/* New column for actions */}
              </tr>
            </thead>
            <tbody>
              {datos.map((x) => (
                <tr key={x.id_ciudad}>
                  <td>{x.id_ciudad}</td>
                  <td>{x.nombre}</td>
                  <td>{x.nombre_pais}</td>
                  <td className='text-center'>
                    {/* Edit Button */}
                    <button type="button" className="btn btn-primary mr-2">
                      Edit
                    </button>
                    {/* Delete Button */}
                    <button type="button" className="btn btn-danger">
                      Borra
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
              };

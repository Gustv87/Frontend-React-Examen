import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const url = "http://localhost:3000/api/foto";

export const Foto = () => {
  const [datos, setDatos] = useState([]);     
  const [nombre, setNombre] = useState('');
  const [file, setFile] = useState(null); 

  const getFoto = async () => { 
    try {
      const response = await fetch(url); // Enviar una solicitud GET a la URL definida
      if (!response.ok) { 
        throw new Error('Error al obtener datos del servidor'); 
      }
      const data = await response.json(); // Analizar la respuesta como datos JSON
      setDatos(data); 
    } catch (error) { // Manejar cualquier error que ocurra durante la solicitud
      console.error(error); 
    }
  };

  const postFoto = async (event) => { 
    event.preventDefault(); // Prevenir el comportamiento de envío de formulario por defecto

    try {
      const formData = new FormData(); 
      formData.append('archivo', file); // Adjuntar el archivo seleccionado al FormData
      formData.append('nombre', nombre); // Adjuntar el campo "nombre" al FormData

      const response = await fetch(url, { // Enviar una solicitud POST a la URL definida
        method: "POST", 
        body: formData, 
      });

      if (!response.ok) { // Comprobar si la respuesta no está OK (por ejemplo, error 404 o 500)
        throw new Error('Error al enviar datos al servidor'); // Lanzar un error si no está OK
      }

      getFoto(); // Llamar a la función "getFoto" para actualizar los datos después del envío

      setNombre(""); // Borrar el estado "nombre" (entrada del formulario)
      setFile(null); // Borrar el estado "file" (entrada de archivo del formulario)
    } catch (error) { // Manejar cualquier error que ocurra durante la solicitud POST
      console.error(error); // Registrar el error en la consola
    }
  };

 

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={6} className="mx-auto mb-4">
          <div className="p-4 border rounded">
            <h1 className="text-center mb-3">Foto</h1>
            <Form onSubmit={postFoto}>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar Foto"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formFile">
                <Form.Label>Seleccionar Foto</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])} /* Manejar el cambio de entrada de archivo */
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Aceptar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
  
};



 

 


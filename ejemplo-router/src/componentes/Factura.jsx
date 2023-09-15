import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

var url  = "http://localhost:3000/api/factura";

export const Factura = () => {

  const [datos , setDatos] = useState([]);
  const [Correo , setCorreo] = useState([]);

  const getFactura = async () => {
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
  getFactura();
}, []);



const handleCorreoChange = (event) => {
  setCorreo(event.target.value);
};

const postCorreo = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Correo }), // Enviar el nombre como JSON al servidor
    });

    if (!response.ok) {
      throw new Error('Error al enviar datos al servidor');
    }


    getFactura();

    // Limpiar el campo de nombre después de enviar
    setCorreo("");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
  
  <Container fluid="md">
        <Col className='justify-content-md-center'>
          <h1 className='text-center p-3'>Crear Factura</h1>
        </Col>

        <Row  className='justify-content-md-center' >
          <Col className='col-sm-12 col-lg-6' >
          <form onSubmit={postCorreo}>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="text"
              className="form-control"
              value={Correo}
              onChange={handleCorreoChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Factura
          </button>
          <br /><br />
        </form>

          </Col>

        </Row>
      </Container>



     <Container fluid="md mt-5">
        
        <Row className='justify-content-md-center '>
        <h1 className='text-center p-3'>Reporte de Factura</h1>
            <Col className='col-lg-6 col-sm-12'>  
                
              <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>id_factura</th>
              <th className='text-center'>Correo</th>
              <th className='text-center'>id_direccion</th>
              <th className='text-center'>Activo</th>
              <th className='text-center'>Fecha_borra</th>


            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id_factura}><td>{x.id_factura}</td><td>{x.correo}</td><td>{x.id_direccion}</td><td>{x.fecha}</td></tr>) }
          </tbody>
        </Table></Col>
        </Row>
    </Container>
    </>
  )
}
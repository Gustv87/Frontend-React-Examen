import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

var url  = "http://localhost:3000/api/factura";

export const Factura = () => {

  const [datos , setDatos] = useState([]);

  const consumoFactura = async ()=>{

      const response = await fetch(url);
      const data = await response.json(); 
      setDatos(data);

  };

  useState( ()=>{

    consumoFactura();

  }, []);

  return (
    <>
        <Container fluid="md mt-5">
        
        <Row className='justify-content-md-center '>
        <h1 className='text-center p-3'>Reporte de Factura</h1>
            <Col className='col-lg-6 col-sm-12'>  
                
              <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>Id Factura</th>
              <th className='text-center'>Correo</th>
              <th className='text-center'>Id Direccion</th>
              <th className='text-center'>Fecha</th>
              <th className='text-center'>Activo</th>
              <th className='text-center'>Fecha_borra</th>



            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id_factura}><td>{x.id_factura}</td><td>{x.correo}</td><td>{x.id_direccion}</td><td>{x.fecha}</td></tr>    ) }
          </tbody>
        </Table></Col>
        </Row>
    </Container>

    </>
  )
}

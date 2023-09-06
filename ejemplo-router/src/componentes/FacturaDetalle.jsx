import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

export const FacturaDetalle = () => {

    var url  = "http://localhost:3000/api/facturaDetalle";

  const [datos , setDatos] = useState([]);

  const consumoFacturaDetalle = async ()=>{

    const response = await fetch(url);
    const data = await response.json(); 
    setDatos(data);

};

useState( ()=>{

    consumoFacturaDetalle();

}, []);

  return (
    <>
     <Container fluid="md mt-5">
        
        <Row className='justify-content-md-center '>
        <h1 className='text-center p-3'>Reporte de  Detalle de Factura</h1>
            <Col className='col-lg-6 col-sm-12'>  
                
              <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>Id Detalle</th>
              <th className='text-center'>Id factura</th>
              <th className='text-center'>Cantidad</th>
              <th className='text-center'>Id Prodcuto</th>


            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id_detalle}><td>{x.id_detalle}</td><td>{x.id_factura}</td><td>{x.id_cantidad}</td><td>{x.id_producto}</td></tr>) }
          </tbody>
        </Table></Col>
        </Row>
    </Container>
    </>
  )
}

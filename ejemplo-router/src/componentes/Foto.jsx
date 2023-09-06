import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'


var url  = "http://localhost:3000/api/foto";

export const Foto = () => {

  const [datos , setDatos] = useState([]);

  const consumoFoto = async ()=>{

      const response = await fetch(url);
      const data = await response.json(); 
      setDatos(data);

  };

  useState( ()=>{

    consumoFoto();

  }, []);

  return (
    <>
        <Container fluid="md mt-5">
        
        <Row className='justify-content-md-center '>
        <h1 className='text-center p-3'>Reporte de Fotos</h1>
            <Col className='col-lg-6 col-sm-12'>  
                
              <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>ID</th>
              <th className='text-center'>NOMBRE FOTO</th>
            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id}><td>{x.id}</td><td>{x.nombre}</td></tr>    ) }
          </tbody>
        </Table></Col>
        </Row>
    </Container>

    </>
  )
}
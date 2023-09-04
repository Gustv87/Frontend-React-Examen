import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

var url  = "http://localhost:3000/api/ciudad";
export const Ciudad = () => {
  
  const [datos , setDatos] = useState([]);

  const consumoCiudad = async ()=>{

      const response = await fetch(url);
      const data = await response.json(); 
      setDatos(data);

  };

  useState( ()=>{

    consumoCiudad();

  }, []);

  return (
    <>
        <Container fluid="md mt-5">
        
        <Row className='justify-content-md-center '>
        <h1 className='text-center p-3'>Reporte de Ciudades</h1>
            <Col className='col-lg-6 col-sm-12'>  
                
              <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>ID</th>
              <th className='text-center'>NOMBRE CIUDAD</th>
            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id}><td>{x.id}</td><td>{x.nombre_ci}</td></tr>    ) }
          </tbody>
        </Table></Col>
        </Row>
    </Container>

    </>
  );
};

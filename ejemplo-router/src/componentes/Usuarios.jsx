import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'


export const Usuarios = () => {

  var url  = "http://localhost:3000/api/usuario";

  const [datos , setDatos] = useState([]);

  const consumoUsuario = async ()=>{

    const response = await fetch(url);
    const data = await response.json(); 
    setDatos(data);

};

useState( ()=>{

  consumoUsuario();

}, []);

  return (

    <>
    
  
        <Container fluid="md mt-5">
        
        <Row className='justify-content-md-center '>
        <h1 className='text-center p-3'>Reporte de Usuario</h1>
            <Col className='col-lg-6 col-sm-12'>  
                
              <Table striped bordered hover>
      <thead className='table-dark'>
        <tr>
          <th className='text-center'>CORREO</th>
          <th className='text-center'>NOMBRE</th>
          <th className='text-center'>ID ROL</th>
          <th className='text-center'>NOMBRE ROL</th>
        </tr>
      </thead>
      <tbody>
      { datos.map( x=> <tr key={x.correo}><td>{x.correo}</td><td>{x.nombre}</td><td>{x.id_rol}</td><td>{x.rol}</td></tr>    ) }
     
      </tbody>
    </Table></Col>

        </Row>
    </Container>
    
    
    </>
   

    
  )
}

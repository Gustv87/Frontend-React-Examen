import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

export const Productos = () => {

  var url = "http://localhost:3000/api/producto";

  const [datos, setDatos] = useState([]);

  const consumoUsuario = async () => {

    const response = await fetch(url);
    const data = await response.json();
    setDatos(data);

  };

  useState(() => {

    consumoUsuario();

  }, []);

  return (
    <>


    
          <div className="container" style={{ maxWidth: "800%", margin: "0 auto", padding: "40px" }}>

            <h1 className='text-center p-3'>Reporte de Productos</h1>
            <Col className='col-lg-6 col-sm-12'>

              <Table striped bordered hover>
                <thead className='table-dark'>
                  <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>NOMBRE</th>
                    <th className='text-center'>PRECIO</th>

                  </tr>
                </thead>
                <tbody>

                  {datos.map(x => <tr key={x.id_producto}><td>{x.id_producto}</td><td>{x.nombre}</td><td>{x.precio}</td></tr>)}
                </tbody>
              </Table></Col>

     </div>

    </>
  )
}

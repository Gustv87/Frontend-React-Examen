import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'

var url = "http://localhost:3000/api/factura";

export const Factura = () => {

  const [datos, setDatos] = useState([]);

  const consumoFactura = async () => {

    const response = await fetch(url);
    const data = await response.json();
    setDatos(data);

  };

  useState(() => {

    consumoFactura();

  }, []);

  return (

    <>

      <div className="container" style={{ maxWidth: "50%", margin: "0 auto", padding: "40px" }}>

        <h1 className="text-center">Crear Factura </h1>

        <form >
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"

            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Crear Factura
          </button>
          <br /><br />
        </form>




        <h1 className='text-center p-3'>Reporte de Factura</h1>
   

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className='text-center'>Id Factura</th>
                <th className='text-center'>Correo</th>
                <th className='text-center'>Id Direccion</th>
                <th className='text-center'>Fecha</th>
                <th className='text-center'>Activo</th>
               
              </tr>
            </thead>
            <tbody>
              {datos.map(x => <tr key={x.id_factura}><td>{x.id_factura}</td><td>{x.correo}</td><td>{x.id_direccion}</td><td>{x.fecha}</td><td>{x.activo}</td></tr>)}
            </tbody>
          </Table>


      </div>
    </>
  )
}

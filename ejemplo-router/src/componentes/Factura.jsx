import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';

var url  = "http://localhost:3000/api/fctura";

export const Factura = () => {

  const [datos , setDatos] = UseState([]);

  const ConsumoFactura = async ()=>{

      const response = await fetch(url);
      const data = await response.json(); 
      setDatos(data);

  };

  UseState( ()=>{

    ConsumoFactura();

  }, []);

  return (
    <>

        <h1>Factura</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Correo</th>
              <th>id Direccion</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.correo}><td>{x.correo}</td><td>{x.id_direccion}</td><td>{x.fecha}</td></tr>    ) }
          </tbody>
        </Table>

    </>
  )
}

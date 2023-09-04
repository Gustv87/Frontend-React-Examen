import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';

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
        <h1>Ciudad</h1>

        <h1>Reporte de Ciudad</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre Ciudad</th>
            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id}><td>{x.id}</td><td>{x.nombre_ciudad}</td></tr>    ) }
          </tbody>
        </Table>

    </>
  )
}

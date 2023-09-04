import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';

var url  = "http://localhost:3000/api/rol";

export const Roles = () => {

  const [datos , setDatos] = useState([]);

  const consumoRoles = async ()=>{

      const response = await fetch(url);
      const data = await response.json(); 
      setDatos(data);

  };

  useState( ()=>{

    consumoRoles();

  }, []);

  return (
    <>
        <h1>Roles</h1>

        

        <h1>Reporte de Roles</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre Rol</th>
            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id}><td>{x.id}</td><td>{x.nombre_rol}</td></tr>    ) }
          </tbody>
        </Table>

    </>
  )
}


import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';

var url  = "http://localhost:3000/api/producto";


export const Productos = () => {
      const [datos , setDatos] = useState([]);

  const consumoProductos = async ()=>{

      const response = await fetch(url);
      const data = await response.json(); 
      setDatos(data);

  };

  useState( ()=>{

    consumoProductos();

  }, []);

  return (
    <>
    <h1>Productos</h1>
   

    <h1>Reporte de productos</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre Producto</th>
          <th>Precio Producto</th>
        </tr>
      </thead>
      <tbody>
        { datos.map( x=> <tr key={x.id}><td>{x.id}</td><td>{x.nombre}</td></tr>    ) }
      </tbody>
    </Table>

</>
  )
}

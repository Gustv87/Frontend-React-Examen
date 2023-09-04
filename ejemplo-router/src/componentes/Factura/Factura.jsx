import {React , useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


var url  = "http://localhost:3000/api/factura";

export const Factura = () => {

  const [correo, setCorreo] = useState("");
  const [id_direccion, setIddireccion] = useState([]);
  



  const getCorreo = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/Usuario");
        if (!response.ok) {
            throw new Error("Error al obtener correo del servidor");
        }
        const data = await response.json();
        setCorreo(data);
    } catch (error) {
        console.error(error);
    }
};

const getId_Direccion = async () => {
  try {
      const response = await fetch("http://localhost:3000/api/direccion");
      if (!response.ok) {
          throw new Error("Error al obtener el id_direccion del servidor");
      }
      const data = await response.json();
      
      setIddireccion (data);
  } catch (error) {
      console.error(error);
  }
};

useEffect(() => {
  get()
  getId_Direccion();
  getCorreo();
}, []);

const handleCorreoChange = (event) => {
  setCorreo(event.target.value);
};
  return (
    <> 

<div className="container" style={{ maxWidth: "750px", margin: "0 auto", padding: "20px" }}>
                <h1 className="text-center">Factura</h1>
                <Form className='fluid-center'>
                    <div className="mb-3">
                        <label className="form-label">correo</label>
                        <input
                            type="text"
                            className="form-control"
                            value={correo}
                            onChange={handleCorreoChange}
                        />
                    </div>
                    <Button type="submit" className="btn btn-primary">
                        Enviar
                    </Button>
                    <br />
                    <br />
                </Form>
        <Table striped bordered hover>
          <thead>
            <tr className='table-success'>
            <th>Id_Factura</th>
              <th>Correo</th>
              <th>id Direccion</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            { datos.map( x=> <tr key={x.id_factura}><td>{x.correo}</td><td>{x.id_direccion}</td><td>{x.fecha}</td></tr>    ) }
          </tbody>
        </Table>
      
     </div>

       
    </>
  )
}

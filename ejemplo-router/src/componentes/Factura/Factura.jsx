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
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos del servidor');
      }
      const data = await response.json();

      setCorreo(data);
      
    } catch (error) {
      console.error(error);
    }
  };

  
  const getIddireccion = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/direccion");
        if (!response.ok) {
            throw new Error("Error al obtener la direccion del servidor");
        }
        const data = await response.json();
        
        setIddireccion(data);
    } catch (error) {
        console.error(error);
    }
};


  useEffect(() => {
    getCorreo();
    getIddireccion
  }, []);

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const postCorreo = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo })
      });

      if (!response.ok) {
        throw new Error('Error al enviar datos al servidor');
      }

      getCorreo();

      setCorreo("");
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <> 

<div className="container" style={{ maxWidth: "750px", margin: "0 auto", padding: "20px" }}>
                <h1 className="text-center">Factura</h1>
                <Form onSubmit={postCorreo}>
                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input
                            type="text"
                            className="form-control"
                            value={correo}
                            onChange={handleCorreoChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Fecha</label>
                        <input
                            type="date"
                            className="form-control"
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

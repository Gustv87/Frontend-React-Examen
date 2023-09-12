import  { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Productos.css';

const url = "http://localhost:3000/api/producto";

export const Productos = () => {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [file, setFile] = useState(null);

  const getProducto = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const postProducto = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("precio", precio);
      if (file) {
        formData.append("foto", file);
      }

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al enviar datos al servidor");
      }

      // Actualizar la lista de datos después de enviar el nuevo producto
      getProducto();

      // Limpiar los campos después de enviar
      setNombre("");
      setPrecio("");
      setFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <h1 className="text-center">Crear Producto</h1>

        <form onSubmit={postProducto}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
              type="text"
              className="form-control"
              value={precio}
              onChange={handlePrecioChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Archivo</label>
            <input
              type="file"
              className="form-control"
              
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Producto
          </button>
          <br /><br />
        </form>



      </div>
      <div className="card-container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
  {datos.map((x) => (
    <Card key={x.id_producto} style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={`data:image/png;base64,${x.foto}`} />
      <Card.Body>
        <Card.Title>{x.nombre}</Card.Title>
        <Card.Text>{x.precio}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  ))}
</div>

    </>
  );
};

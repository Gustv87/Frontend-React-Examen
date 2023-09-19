import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { TableHTMLAttributes } from "react";
import './Catalogo.css';

const url = "http://localhost:3000/api/producto";

export const Catalogo = ({
}) => {
  const [allProduct, setAllProduct] = useState([]);
  const [countProduct, setCountProduct] = useState(0);
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(false);



  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [file, setFile] = useState(null);
  const [quantity, setQuantity] = useState(null);


  //modal flotante
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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




  const onAddProduct = product => {
    if (allProduct.find(item => item.id === product.id_producto)) {
      const products = allProduct.map(item =>
        item.id === product.id_producto
          ? {item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.precio * product.quantity);
      return setAllProduct([products]);
    }

    setTotal(total + product.precio * product.quantity);
    setAllProduct([...  allProduct, product]);
  };


  return (

    <>


      <Container className="m-5">
        <Button variant="primary" onClick={handleShow}>
          Carrito
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Productos en Carrito</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <div>
                {allProduct.length ? (
                  <>
                    <div className='row-product'>
                      <table class="table" >
                        <thead>
                          <tr>

                            <th scope="col">Cantidad</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                          </tr>
                        </thead>

                      </table>
                      {allProduct.map(product => (

                        <table class="table" >

                          <tbody>
                            <tr key={product.id_producto}>

                              <td>{product.quantity}</td>
                              <td>{product.nombre}</td>
                              <td>L.{product.precio}</td>
                     
                            </tr>

                          </tbody>
                        </table>

                      ))}
                    </div>
                    <div className='cart-total'>
                      <h3>Total:</h3>
                      <span className='total-pagar'>L.{total}</span>
                    </div>



                  </>
                ) : (
                  <p className='cart-empty'>El carrito está vacío</p>
                )}
              </div>
            </>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>





      <div className="card-container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        {datos.map((product) => (
          <Card key={product.id_producto} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={`data:image/png;base64,${product.foto}`} />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>{product.precio}</Card.Text>
              <Button variant="primary" onClick={() => onAddProduct(product)}>Agregar al carrito</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

    </>
  )
}

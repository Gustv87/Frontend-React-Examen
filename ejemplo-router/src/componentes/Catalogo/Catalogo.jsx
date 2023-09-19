import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { TableHTMLAttributes } from "react";
import './Catalogo.css';

const url = "http://localhost:3000/api/producto";
const urlFac = "http://localhost:3000/api/factura";

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
  const [cantidadTotal, setCantidadTotal] = useState("");
  const [precioTotal, setPrecioTotal]= useState("");


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
  const handleClick = () => {
    // Cambiar el valor de miVariable
    setCantidadTotal(countProduct)
  };
  const handleClickPrecio = () => {
    // Cambiar el valor de miVariable
    setPrecioTotal(total)
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

   const handleCantidadTotalChange = (event) => {
    setCantidadTotal(event.target.span);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };
  const handlePrecioTotalChange = (event) => {
    setPrecioTotal(event.target.span);
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

  const postFactura = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(urlFac, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cantidadTotal, precioTotal}), 
      });

      if (!response.ok) {
        throw new Error("Error al enviar datos al servidor");
      }

      // Actualizar la lista de datos después de enviar la nueva dirección
      getDireccion();

      // Limpiar los campos después de enviar
      setDireccion("");
      setDescripcion("");
      setCorreo("");
      setCiudadId(""); 
    } catch (error) {
      console.error(error);
    }
  };

  const onAddProduct = product => {
    if (allProduct.find(item => item.id === product.id_producto)) {
      const products = allProduct.map(item =>
        item.id === product.id_producto
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setTotal(total + product.precio * product.quantity);
      setCountProduct(countProduct + product.quantity);
      return setAllProduct([products]);
    }

    setTotal(total + product.precio * product.quantity);
    setCountProduct(countProduct + product.quantity);
    setAllProduct([...allProduct, product]);
  };


  return (

    <>


      <Container className="m-5" onSubmit={postFactura}>
        <Button variant="primary" onClick={handleShow}>
          Carrito
        </Button>

        <Modal show={show} onHide={handleClose} onSubmit={postFactura}>
          <Modal.Header closeButton>
            <Modal.Title>Productos en Carrito</Modal.Title>
          </Modal.Header>
          <Modal.Body onSubmit={postFactura}>
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
                    <div className='cart-total' onSubmit={postFactura}>
                      <h3>Cantidad:</h3>
                      <span span={cantidadTotal} onChange={handleCantidadTotalChange}>{countProduct}</span>
                      
                     
                    </div>
                    <div className='cart-total' onSubmit={postFactura}>
                      <h3>Total:</h3>
                      
                      <span className='total-pagar' span={precioTotal} onChange={handlePrecioTotalChange}>{total}</span>
                    </div>



                  </>
                ) : (
                  <p className='cart-empty'>El carrito está vacío</p>
                )}
              </div>
            </>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="submit" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={(event) => {
                if (cantidadTotal.trim() === '' || precioTotal.trim() === '') {
                  event.preventDefault();
                  alert('Los campos no pueden estar vacíos');
                }else{
                  alert('Se Agrego Correctamente');
                }
              }}>
              Agregar Factura
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

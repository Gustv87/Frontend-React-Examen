import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const Login = ({ onLogin }) => {
  const [show, setShow] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleClose = () => {
    setShow(false);
    setIsRegistering(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', credentials);
      const { token } = response.data;
      onLogin(token);
      handleClose();
    } catch (err) {
      setError('Nombre de usuario o contraseña no válidos');
    }
  };
  const handleRegister = async () => {
    const response = await axios.post('http://localhost:3000/api/usuario', credentials);
    // Implementa la lógica para registrar un nuevo usuario aquí
    // Puedes enviar una solicitud POST al servidor para crear una cuenta
    // Después de un registro exitoso, puedes iniciar sesión automáticamente si lo deseas
  };

  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering); // Alternar entre inicio de sesión y registro
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isRegistering ? 'Registro' : 'Iniciar Sesión'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Ingresa tu nombre de usuario"
                value={credentials.username}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                value={credentials.password}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          {error && <p className="text-danger">{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {isRegistering ? (
            <Button variant="primary" onClick={handleRegister}>
              Registrarse
            </Button>
          ) : (
            <Button variant="primary" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
          )}
          <Button variant="link" onClick={toggleRegisterMode}>
            {isRegistering ? '¿Ya tienes una cuenta? Iniciar Sesión' : '¿No tienes una cuenta? Regístrate'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

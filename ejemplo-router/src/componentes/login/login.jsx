import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './Login.css'; // Importa el archivo CSS para el estilo

export const Login = ({ onLogin }) => {
  const [show, setShow] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [allowClose, setAllowClose] = useState(false); // Variable para permitir o denegar el cierre del modal

  const handleClose = () => {
    if (allowClose) {
      setShow(false);
      setIsRegistering(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    if (credentials.username && credentials.password) {
      try {
        const response = await axios.post('http://localhost:3000/api/login', credentials);
        const { token } = response.data;
        onLogin(token);
        handleClose();
      } catch (err) {
        setError('Nombre de usuario o contraseña no válidos');
      }
    } else {
      setError('Por favor, ingresa nombre de usuario y contraseña.');
    }
  };

  const handleRegister = async () => {
    if (credentials.username && credentials.password) {
      try {
        const response = await axios.post('http://localhost:3000/api/usuario', credentials);

        if (response.status === 201) {
          window.location.href = 'http://localhost:3000/';
        }
      } catch (err) {
        setError('Error al registrar usuario');
      }
    } else {
      setError('Por favor, ingresa nombre de usuario y contraseña.');
    }
  };

  const handleModalExited = () => {
    // Restablece la validación al cerrar el modal
    setAllowClose(false);
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen" onExited={handleModalExited}>
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
        <Button variant="link" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? '¿Ya tienes una cuenta? Iniciar Sesión' : '¿No tienes una cuenta? Regístrate'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

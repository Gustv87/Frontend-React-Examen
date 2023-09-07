import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Definimos el componente Login
export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
// Definimos estados para el nombre de usuario, la contraseña y los errores

  // Manejador de evento para el botón de inicio de sesión
  const handleLogin = () => {
    // Comparamos el nombre de usuario y la contraseña ingresados con los valores correctos
    if (username === 'tu_usuario' && password === 'tu_contraseña') {
      // Si son correctos, llamamos a la función onLogin para autenticar al usuario
      onLogin();
    } else {
      setError('Nombre de usuario o password no válidos');
    }
  };

  return (
    <div className="p-4 border rounded">
    <h1 className="text-center mb-3">Login</h1>
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Nombre de Usuario</Form.Label> 
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre de usuario" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label> 
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleLogin} className="w-100">
        Iniciar Sesión
      </Button> 
    </Form>
    {error && <p className="text-danger mt-2">{error}</p>} 
  </div>
  );
};




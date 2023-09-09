
import { useState } from 'react';
import axios from 'axios';

export const Login = ({dataSesion}) => {


  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const url = "http://localhost:3000/api/login";

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que los campos estén completos
    if (correo.trim() === '' || password.trim() === '') {
      setError('Por favor, complete todos los campos');
      return;
    }

    try {

      const bodyResponse = 
      {
          correo : "fernando.lopez@gmail.com",
          password :"Hola12$"
      
      };
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyResponse) // Enviar el nombre como JSON al servidor
      });


      const jsonResponse = await response.json();

      if (response.status === 200) {
        console.log(jsonResponse);
        dataSesion( true );
        
      }
    } catch (error) {
      // Manejar el error de respuesta del backend

      console.log(error);

      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Error de conexión');
      }
    }
  };

  return (
    <>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 className="text-center">Iniciar Sesión</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Correo Electrónico:</label>
            <input
              type="email"
              className='form-control'
              value={correo}
              onChange={handleCorreoChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              className='form-control'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </>
  );
};
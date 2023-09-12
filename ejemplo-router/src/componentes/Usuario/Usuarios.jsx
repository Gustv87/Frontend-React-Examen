import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Usuario.css'

export const Usuarios = () => {
  const [correo, setCorreo] = useState('');
  const [nombre_usuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const url = "http://localhost:3000/api/usuario";

  const handleNombreChange = (event) => {
    setNombreUsuario(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const postUsuario = async (event) => {
    event.preventDefault();
   
    try {
      const response = await axios.post(url, {
        correo,
        nombre_usuario,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // La solicitud se completó correctamente
        setNombreUsuario('');
        setCorreo('');
        setPassword('');
        setError('');
        console.log(response.data);

        // Borrar el mensaje de error después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
          setError('');
        }, 3000);
      }
    } catch (error) {
      // Manejar el error de respuesta del backend
      setError(error.response.data.error);

      // Borrar el mensaje de error después de 3 segundos (3000 milisegundos)
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };



  return (
    <>
    
    <div className="container center" style={{ maxWidth: "50%", margin: "0 auto", padding: "40px" }}>

        <h1 className="text-center">Registro Usuario</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={postUsuario}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              className='form-control'
              value={nombre_usuario}
              onChange={handleNombreChange}
            />
          </div>
          <div>
            <label>Correo:</label>
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
          <button type="submit" className="btn btn-primary">
            <Link
              className='btn-crear'
              to="/"
              onClick={(event) => {
                if (correo.trim() === '' || nombre_usuario.trim() === '' || password === '') {
                  event.preventDefault();
                  alert('Los campos no pueden estar vacíos');
                }
              }}
            >
              Crear Usuario
            </Link>
          </button>
          <br />
        </form>
      </div>
    </>
  );
};
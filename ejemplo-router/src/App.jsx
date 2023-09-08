
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Default } from './componentes/Default';
import { Login } from './componentes/login/login';
import { Usuarios } from './componentes/Usuarios';
import { Roles } from './componentes/Roles';
import { Ciudad } from './componentes/Ciudad';
import { Pais } from './componentes/Pais/Pais';
import { Productos } from './componentes/Productos';
import { Inicio } from './componentes/Inicio';
import { FacturaDetalle } from './componentes/FacturaDetalle';
import { Menu } from './componentes/Menu';
import { Direccion } from './componentes/Direccion/Direccion';
import { Foto } from './componentes/Foto';
import { Factura } from './componentes/Factura';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const PrivateRoute = ({ element, path }) => {
    return isLoggedIn ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/login" replace />
    );
  };

  PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
  };

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <PrivateRoute path="/usuarios" element={<Usuarios />} />
        <PrivateRoute path="/roles" element={<Roles />} />
        <PrivateRoute path="/ciudad" element={<Ciudad />} />
        <PrivateRoute path="/pais" element={<Pais />} />
        <PrivateRoute path="/direccion" element={<Direccion />} />
        <PrivateRoute path="/factura" element={<Factura />} />
        <PrivateRoute path="/facturadetalle" element={<FacturaDetalle />} />
        <PrivateRoute path="/productos" element={<Productos />} />
        <PrivateRoute path="/foto" element={<Foto />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </>
  );
}

export default App;
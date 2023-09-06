import  { useState, useEffect } from "react";

let url = "http://localhost:3000/api/direccion";

export const Direccion = () => {
  const [datos, setDatos] = useState([]);
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [correo, setCorreo] = useState("");
  const [ciudadId, setCiudadId] = useState(""); // ID de la ciudad seleccionada

  const [ciudades, setCiudades] = useState([]); // Lista de ciudades con nombre de país

  const getDireccion = async () => {
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

  // Función para obtener la lista de ciudades con nombre de país
  const getCiudades = async () => {
    try {
     
      const response = await fetch("http://localhost:3000/api/ciudad"); 
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      // Formatear la lista de ciudades como "Nombre de Ciudad, Nombre de País"
      const ciudadesConPais = data.map((ciudad) => `${ciudad.nombre}, ${ciudad.nombre_pais}`);
      setCiudades(ciudadesConPais);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDireccion();
    getCiudades(); // Obtener la lista de ciudades con nombres de países
  }, []);

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleCiudadChange = (event) => {
    setCiudadId(event.target.value); // Guardar el ID de la ciudad seleccionada
  };

  const postDireccion = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ direccion, descripcion, correo, id_ciudad: ciudadId }), 
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

  return (
    <>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 className="text-center">Crear Dirección</h1>

        <form onSubmit={postDireccion}>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              value={direccion}
              onChange={handleDireccionChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <input
              type="text"
              className="form-control"
              value={descripcion}
              onChange={handleDescripcionChange}
            />
          </div>
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
            <label className="form-label">Ciudad</label>
            <select
              className="form-control"
              value={ciudadId}
              onChange={handleCiudadChange}
            >
              <option value="">Selecciona una ciudad</option>
              {ciudades.map((ciudad, index) => (
                <option key={index} value={index}>
                  {ciudad}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Dirección
          </button>
          <br /><br />
        </form>

        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Dirección</th>
              <th>Descripción</th>
              <th>Correo</th>
              <th>Ciudad</th>
              <th className="text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((x) => (
              <tr key={x.id_direccion}>
                <td>{x.direccion}</td>
                <td>{x.descripcion}</td>
                <td>{x.correo}</td>
                <td>{x.nombre_ciudad}</td>
                <td className="text-center">
                  <button type="button" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

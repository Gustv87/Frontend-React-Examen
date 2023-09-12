import { useState, useEffect } from "react";

let ciudadUrl = "http://localhost:3000/api/ciudad"; // URL para Ciudad
let paisUrl = "http://localhost:3000/api/pais"; // URL para País

export const Ciudad = () => {
  const [ciudades, setCiudades] = useState([]);
  const [nombre, setNombre] = useState("");
  const [selectedPais, setSelectedPais] = useState("");
  const [paises, setPaises] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Estado para mostrar el mensaje de éxito

  const getCiudades = async () => {
    try {
      const response = await fetch(ciudadUrl);
      if (!response.ok) {
        throw new Error('Error al obtener datos de la ciudad');
      }
      const data = await response.json();
      setCiudades(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPaises = async () => {
    try {
      const response = await fetch(paisUrl);
      if (!response.ok) {
        throw new Error('Error al obtener datos de países');
      }
      const data = await response.json();
      setPaises(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCiudades();
    getPaises();
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handlePaisChange = (event) => {
    setSelectedPais(event.target.value);
  };

  const postCiudad = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(ciudadUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, nombre_pais: selectedPais }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar datos de ciudad al servidor');
      }

      // Actualizar la lista de ciudades después de enviar una nueva ciudad
      getCiudades();

      // Limpiar los campos después de enviar
      setNombre("");
      setSelectedPais("");

      // Mostrar el mensaje de éxito
      showSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  // Función para mostrar el mensaje de éxito
  const showSuccess = () => {
    setShowSuccessMessage(true);

    // Ocultar el mensaje después de unos segundos (por ejemplo, 3 segundos)
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="container center" style={{ maxWidth: "50%", margin: "0 auto", padding: "40px" }}>
      <h1 className="text-center">Crear Ciudad</h1>

      {/* Mostrar mensaje de éxito si showSuccessMessage es true */}
      {showSuccessMessage && (
        <div className="alert alert-success">
          Ciudad creada con éxito.
        </div>
      )}

      <form onSubmit={postCiudad}>
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
          <label className="form-label">País</label>
          <select
            className="form-control"
            value={selectedPais}
            onChange={handlePaisChange}
          >
            <option value="">Seleccionar País</option>
            {paises.map((pais) => (
              <option key={pais.id} value={pais.nombre}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Ciudad
        </button>
      </form>

      <h1 className="text-center mt-4">Ciudades</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th className="text-center">Nombre</th>
            <th className="text-center">País</th>
            <th className="text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          {ciudades.map((ciudad) => (
            <tr key={ciudad.id_ciudad}>
              <td>{ciudad.nombre}</td>
              <td>{ciudad.nombre_pais}</td>
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
  );
};

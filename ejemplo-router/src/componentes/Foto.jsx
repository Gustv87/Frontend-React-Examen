import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

var url = "http://localhost:3000/api/foto";

export const Foto = () => {

    const [datos, setDatos] = useState([]);

    const consumoFotos = async () => {

        const response = await fetch(url);
        const data = await response.json();
        setDatos(data);

    };

    useState(() => {

        consumoFotos();

    }, []);

    return (
        <>
            <h1>Fotos</h1>
            <h1>Reporte de Fotos</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(x => <tr key={x.id}><td>{x.id}</td><td>{x.nombre}</td></tr>)}
                </tbody>
            </Table>

        </>
    )
}

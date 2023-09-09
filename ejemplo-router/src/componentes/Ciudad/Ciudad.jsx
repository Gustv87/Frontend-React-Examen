import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Ciudad.css';

const url = "http://localhost:3000/api/ciudad";

export const Ciudad = () => {
    const [datos, setDatos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [nombrePais, setNombrePais] = useState('');
    const [paises, setPaises] = useState([]);

    const getCiudad = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error al obtener datos del servidor');
            }
            const data = await response.json();
            setDatos(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchCountries = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/pais");
            if (!response.ok) {
                throw new Error('Error al obtener datos de países');
            }
            const data = await response.json();
            setPaises(data);
        } catch (error) {
            console.error(error);
        }
    };

    const postCiudad = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar datos al servidor');
            }

            getCiudad();
            setNombre("");
            setNombrePais("");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCiudad();
        fetchCountries();
    }, []);

    return (
        <Container fluid className="mt-5">
            <Row>
                <Col md={6} className="mb-4">
                    <div className="p-4 border rounded">
                        <h1 className="text-center mb-3"> Ciudad</h1>
                        <Form onSubmit={postCiudad}>
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar Ciudad"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPais">
                                <Form.Label>País</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={nombrePais}
                                    onChange={(e) => setNombrePais(e.target.value)}
                                >
                                    <option value="">Seleccionar País</option>
                                    {paises.map((pais) => (
                                        <option key={pais.id} value={pais.nombre}>
                                            {pais.nombre}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Aceptar
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col md={6}>
                    <h2 className="text-center mb-3">Reporte</h2>
                    <Table striped bordered hover>
                        <thead className='table-dark'>
                            <tr>
                                <th className='text-center'>Id</th>
                                <th className='text-center'>Nombre Ciudad</th>
                                <th className='text-center'>Nombre Pais</th>
                                <th className='text-center'>Acciones</th> {/* New column for actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((x) => (
                                <tr key={x.id_ciudad}>
                                    <td>{x.id_ciudad}</td>
                                    <td>{x.nombre}</td>
                                    <td>{x.nombre_pais}</td>
                                    <td className='text-center'>
                                        {/* Edit Button */}
                                        <button type="button" className="btn btn-primary btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                            </svg>
                                        </button>
                                        &nbsp;&nbsp;
                                        <td>
                                            
                                        </td>
                                        {/* Delete Button */}
                                        <button type="button" className="btn btn-danger btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                            </svg>
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

import React from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';
import './main.css';
import CrearReceta from './crearReceta';
import{BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom"


function Main(){
 return (
     <div className='wrapper'>
             <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            Recetar
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Recetario</Nav.Link>
                            <Nav.Link as={Link} to={"/crearReceta"}>Crear</Nav.Link>
                            <NavDropdown title="Perfil" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Editar Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='mainpg'>
                    <Row xs={2} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                        <Col className='columnaMain'>
                        <Card className='cardmain'>
                            <Card.Img className='imagenCard' alt="fotoreceta"/>
                            <Card.Body>
                                <Card.Title>Titulo Receta</Card.Title>
                                <br></br>
                                <Card.Subtitle>Chefcito: </Card.Subtitle>
                                <Card.Text>
                                Descripción breve de la receta
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Dificultad:</ListGroupItem>
                                    <ListGroupItem>Categoría:</ListGroupItem>
                                    <ListGroupItem>Calificación</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <Button variant="primary">Ver</Button>
                                    </Card.Body>
                                    </Card.Body>
                        </Card>
                        </Col>
                        ))}
                        </Row>
            </div>
            <div class="container-fluid">
            
            </div>
    </div>
);}

export default Main;
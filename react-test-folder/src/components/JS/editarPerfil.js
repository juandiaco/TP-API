import React from "react";
import {Form,section, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton,Col,Row,Card, CardImg, InputGroup, FormControl} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import MainNavigation from "./MainNavigation";
import CardItem from "./cards/cardItem";

const lista = [
    {
        id: "c1",
        titulo: "Pollo con papas",
        chef: "Luciana Souto",
        descripcion: "Para una cena rápida",
        dificultad: "Fácil",
        categoria: "Cena",
        imagen: "./comidas/pollo.jpg",
        calificacion: "4.5",
    },
]
function EditarPerfil(){
    document.body.style.backgroundColor= "bisque";
    return(
        <div className="wrapper">
            <div>
            <MainNavigation/>
            </div>
            <div>
                <Container>
                    <Row className="row">
                        <Col class="col col-lg-9 col-xl-7">
                            <Card className="perfilcard">
                                <CardHeader> Mi Perfil </CardHeader>
                                <Card.Title id="titulocard"> Juan Diaco </Card.Title>
                                <CardImg class="header" src={"/comidas/pfp.jpg"} alt={"Foto de Perfil"}></CardImg>
                                <Button variant="primary" id="botonheader"> Cambiar Foto </Button>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic.addon1"> @ </InputGroup.Text>
                                        <FormControl
                                        placeholder="Juan Diaco"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                    <InputGroup.Text>Acerca de mí</InputGroup.Text>
                                    <FormControl as="textarea" aria-label="With textarea" placeholder="Entusiasta de la gastronomía. Me encanta crear nuevas recetas."/>
                                    </InputGroup>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" id="btncrear">
                                        <a>
                                            Guardar Cambios
                                        </a>
                                    </Button>
                                </Card.Footer>
                            </Card>

                        </Col>
                    </Row>
                </Container>
                <div id="listadoRecetas">
                    <div className="containerRecetario">
                        <h2 id="hrec"> Mis Recetas </h2>
                    <Row className="g-2 recetariosLista">
                        {lista.map((card) => (
                        <Col md={6} className='columnaMain'>
                            <CardItem 
                            key={card.id}
                            imagen={card.imagen}
                            titulo={card.titulo}
                            chef={card.chef}
                            descripcion={card.descripcion}
                            dificultad={card.dificultad}
                            categoria={card.categoria}
                            calificacion={card.calificacion}/>
                        </Col>
                ))}
                </Row>
                </div>
                </div>

            </div>
        </div>
        
    )
}

export default EditarPerfil;
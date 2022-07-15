import React from "react";
import MainNavigation from "./MainNavigation";
import {Form, Accordion, AccordionButton, AccordionCollapse, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton,Tab,Tabs} from 'react-bootstrap';
import { getLocalStorage, recetaTemporal, traerRecetaCompletaCon } from "../controller/app-controller";
import { Cloudinary } from "cloudinary-core";



function RecetaCompleta(){
    const cloudinaryCore = new Cloudinary({cloud_name:'deaivh2un'});
    document.body.style.backgroundColor= "bisque";
    let almacenamientoLocal = getLocalStorage();
    let receta = almacenamientoLocal.getObj("recetaTemporal");
    console.log("recetas pagina",receta);
    return(
        <div className="wrapper">
            <div>
            <MainNavigation/>
            </div>     
            <Card className="cardReceta">
                <Card.Header>
                    <h1>
                     {receta.titulo}
                    </h1>
                    <h3>
                        By: {receta.chef}
                    </h3>
                </Card.Header>
                <Card.Body>
                    Categoría: {receta.categoria}
                    <br/>
                    Dificultad: {receta.dificultad}
                    <Card.Img className="imagenReceta" alt={receta.titulo} src={cloudinaryCore.url(receta.imagen)}/>
                    <Accordion className="accordionReceta">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="tituloAccordion">
                                Ingredientes 
                            </Accordion.Header>
                                <Accordion.Body> 
                                    <ListGroup>
                                        <li>{receta.ingredientes}</li>
                                        <br/>
                                    </ListGroup>
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Procedimiento</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                {receta.procedimiento}
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
                <Card.Footer>
                    <button className="btn"> Calificar </button>
                </Card.Footer>
                
            </Card>

        </div>

    )
}

export default RecetaCompleta;
import React from "react";
import MainNavigation from "./MainNavigation";
import {Form, Accordion, AccordionButton, AccordionCollapse, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton,Tab,Tabs} from 'react-bootstrap';
import { getLocalStorage, traerRecetaCompletaCon } from "../controller/app-controller";

let dataRec = getLocalStorage();
console.log(dataRec.getItem("titulo"));

function RecetaCompleta(){
    document.body.style.backgroundColor= "bisque";
    return(
        <div className="wrapper">
            <div>
            <MainNavigation/>
            </div>     
            <Card className="cardReceta">
                <Card.Header>
                    <h1>
                      {dataRec.getItem("titulo")}
                    </h1>
                    <h3>
                        By: Chefcito
                    </h3>
                </Card.Header>
                <Card.Body>
                    Categoría: ejemplo, ejemplo2
                    <br/>
                    Dificultad: Avanzado
                    <Card.Img className="imagenReceta" src="./comidas/cazuelamariscos.jpg" alt="Imagen"/>
                    <Accordion className="accordionReceta">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="tituloAccordion">
                                Ingredientes 
                            </Accordion.Header>
                                <Accordion.Body> 
                                    <ListGroup>
                                        <li>Ingrediente 1</li>
                                        <li>Ingrediente 2</li>
                                        <li> Ingrediente 3</li>
                                        <br/>
                                    </ListGroup>
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Procedimiento</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
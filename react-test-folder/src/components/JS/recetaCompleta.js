import React from "react";
import MainNavigation from "./MainNavigation";
import {Form, Accordion, AccordionButton, AccordionCollapse, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton,Tab,Tabs} from 'react-bootstrap';


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
                        Nombre de la Receta
                    </h1>
                    <h3>
                        By: Chefcito
                    </h3>
                </Card.Header>
                <Card.Body>
                    Categoría: ejemplo, ejemplo2
                    <br/>
                    Dificultad: Avanzado
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <ListGroup>
                                    
                                </ListGroup>
                            </Accordion.Header>
                                <Accordion.Body> aa </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Procedimiento</Accordion.Header>
                            <Accordion.Body>
                                AA
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
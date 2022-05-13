import React from "react";
import {Form,section, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton,Col,Row,Card, CardImg} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import MainNavigation from "./MainNavigation";


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
                                <CardImg class="header" src={"comidas/pollo"} alt={"Foto de Perfil"}></CardImg>
                            </Card>

                        
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
        
    )
}

export default EditarPerfil;
import React, {useState, useEffect} from "react";
import {Form,section, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton,Col,Row,Card, CardImg, InputGroup, FormControl, Carousel} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import MainNavigation from "./MainNavigation";
import MyCardItem from "./cards/myCardItem";
import {Image} from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import { misRecetasController, getLocalStorage, getLocalRecetas, localRecetas } from "../controller/app-controller";

function RecetasFiltradas(){
    
    
    let almacenamientoLocal = getLocalStorage();
    let recetas = almacenamientoLocal.getObj("recetasFiltradas");
    console.log("recetas pagina",recetas);
    document.body.style.backgroundColor= "bisque";
    
    return(
        <div>
            <div>
            <MainNavigation/>
            </div>
            <div class="container-sm justify-content-center">

            <Row className="g-2">

                    {recetas.map((card) => (
                    <Col md={6} className='columnaMain'>
                    <MyCardItem 
                    key={card.id}
                    imagen={card.imagenReceta}
                    titulo={card.titulo}
                    chef={card.creador}
                    dificultad={card.dificultad}
                    categoria={card.categoria}
                    calificacion={card.puntaje}
                     />
                    </Col>
                ))}
                </Row>

            </div>
            

        </div>
    );
}

export default RecetasFiltradas;
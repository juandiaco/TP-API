import React, {useState, useEffect} from "react";
import {Form,section, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton,Col,Row,Card, CardImg, InputGroup, FormControl, Carousel} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import MainNavigation from "./MainNavigation";
import CardItem from "./cards/cardItem";
import {Image} from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import { misRecetasController, getLocalStorage, getLocalRecetas, localRecetas } from "../controller/app-controller";
const slide1 = require('./slides-carrusel/slideSushi.jpg');
const slide2 = require('./slides-carrusel/slideComidas.jpg');
const slide3 = require('./slides-carrusel/slideEnsaladas.jpg');


function MisRecetas(){
    
    
    let almacenamientoLocal = getLocalStorage();
    let recetas = almacenamientoLocal.getObj("recetas");
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
                    <CardItem 
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

export default MisRecetas;
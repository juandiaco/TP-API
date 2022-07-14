import React, {useState, useEffect} from "react";
import {Form,section, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton,Col,Row,Card, CardImg, InputGroup, FormControl} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import MainNavigation from "./MainNavigation";
import CardItem from "./cards/cardItem";
import {Image} from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import { misRecetasController, getLocalStorage, localRecetas } from "../controller/app-controller";

function MisRecetas(){
    document.body.style.backgroundColor= "bisque";

    misRecetasController();
    console.log("PAGINA", localRecetas);
    let recetas = localRecetas
    
    return(
        <div>
            <div>
            <MainNavigation/>
            </div>
            <div>
                {recetas.map((card) => (
                    <Col md={6} className='columnaMain'>
                    <CardItem 
                    key={card._id}
                    
                    titulo={card.titulo}
                    chef={card.autor}
                    dificultad={card.dificultad}
                    categoria={card.categoria}
                    calificacion={card.puntaje} />
                    </Col>
                ))}
            

            </div>
            

        </div>
    );
}

export default MisRecetas;
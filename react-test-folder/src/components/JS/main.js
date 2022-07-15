import React from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton} from 'react-bootstrap';
import './main.css';
import CrearReceta from './crearReceta';
import Recetario from './recetario'
import{BrowserRouter as Router, Switch, Route, Routes, Link, NavLink} from "react-router-dom"
import MainNavigation from './MainNavigation';
import CardItem from './cards/cardItem';
import editarPerfil from './editarPerfil';
import Footer from './footer';
import { traerRecetas, getLocalStorage } from '../controller/app-controller';



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
    {
        id: "c2",
        titulo: "Cookies de Chocolate",
        chef: "Juan Diaco",
        descripcion: "Galletitas para todas las edades!",
        dificultad: "Intermedia",
        categoria: "Merienda",
        imagen: "./comidas/cookies.jpg",
        calificacion: "4.0",
    },
    {
        id: "c3",
        titulo: "Ensalada de Frutas",
        chef: "Juan Diaco",
        descripcion: "Perfecta para el verano!",
        dificultad: "Facil",
        categoria: "Postre",
        imagen: "./comidas/ensaladaFrutas.jpg",
        calificacion: "3.5",
    },
    {
        id: "c4",
        titulo: "Hamburguesa Vegana",
        chef: "Luciana Souto",
        descripcion: "Alternativa a la carne",
        dificultad: "Avanzada",
        categoria: "Almuerzo",
        imagen: "./comidas/hamburguesavegana.jpg",
        calificacion: "3.0",
    },
    {
        id: "c5",
        titulo: "Guiso de Mondongo",
        chef: "Luciana Souto",
        descripcion: "Típico guiso de invierno",
        dificultad: "Intermedia",
        categoria: "Almuerzo",
        imagen: "./comidas/guiso.jpg",
        calificacion: "3.4.0",
    }
];



function Main(){
document.body.style.backgroundColor= "bisque";
traerRecetas();
let almacenamientoLocal = getLocalStorage();
let recetas = almacenamientoLocal.getObj("recetasPublicadas");
console.log("recetas pagina",almacenamientoLocal.getObj("recetasPublicadas"));
 return ( 
     <div>
        <div className='wrapper'>
            <MainNavigation /> 
            <div id="containerRecetario">
                <div id="barraLateral">

                    <div className='dropdowns'>
                        <DropdownButton id="dropdown-item-button" title="Categoría">
                            <Dropdown.Item as="button">Cena</Dropdown.Item>
                            <Dropdown.Item as="button">Merienda</Dropdown.Item>
                            <Dropdown.Item as="button">Postre</Dropdown.Item>
                        </DropdownButton>

                        <br/>
                        <DropdownButton id="dropdown-item-button" title="Ingrediente">
                            <Dropdown.Item as="button">Papa</Dropdown.Item>
                            <Dropdown.Item as="button">Carne</Dropdown.Item>
                            <Dropdown.Item as="button">Chocolate</Dropdown.Item>
                        </DropdownButton>

                        <br/>
                        <DropdownButton id="dropdown-item-button" title="Dificultad">
                            <Dropdown.Item as="button">Facil</Dropdown.Item>
                            <Dropdown.Item as="button">Intermedia</Dropdown.Item>
                            <Dropdown.Item as="button">Avanzada</Dropdown.Item>
                        </DropdownButton>
                        

                    </div>
            </div>
            <div id="listadoRecetas">
                
                <div>
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
                </div>
            
        </div>
        <Footer />
    </div>
);}

export default Main;
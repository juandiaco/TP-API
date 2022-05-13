import React from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';
import './main.css';
import CrearReceta from './crearReceta';
import Recetario from './recetario'
import{BrowserRouter as Router, Switch, Route, Routes, Link, NavLink} from "react-router-dom"
import MainNavigation from './MainNavigation';
import CardItem from './cards/cardItem';




const lista = [
    {
        id: "c1",
        titulo: "Pollo con papas",
        chef: "Luciana Souto",
        descripcion: "Receta facil de hacer y con pocos ingredientes",
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
        descripcion: "Para no comer carne y disfrutar de la misma sensación",
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
 return (
     
     <div className='wrapper'>
            <MainNavigation />
            
            
            <div className='container mainpg '>
                
            <Row className="g-2">

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
                calificacion={card.calificacion} />
                </Col>
            ))}
            </Row>
            </div>


             

    </div>
);}

export default Main;
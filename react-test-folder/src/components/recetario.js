import React from "react";
import MainNavigation from "./MainNavigation"
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton,Col,Row} from 'react-bootstrap';
import CardItem from "./cards/cardItem";

const lista = [
    {
        id: "c1",
        titulo: "Brownie de Limón",
        chef: "Juan Diaco",
        descripcion: "Para disfrutar la merienda",
        dificultad: "Intermedia",
        categoria: "Pastelería",
        imagen: "./comidas/brownielimon.jpg",
        calificacion: "4.5",
    },
    {
        id: "c2",
        titulo: "Cazuela de Mariscos",
        chef: "Juan Diaco",
        descripcion: "Porciones grandes para la familia",
        dificultad: "Avanzada",
        categoria: "Mariscos",
        imagen: "./comidas/cazuelamariscos.jpg",
        calificacion: "5.0",
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
]


function Recetario(){
    return(
        <div className="wrapper">
            <div>
                <MainNavigation/>
                <h1 id="tituloRec"> Tus recetas favoritas </h1>
            </div>
            <div id="listadoRecetas">
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
        </div>
    );
}

export default Recetario;

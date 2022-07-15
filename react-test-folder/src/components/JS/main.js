import React, { useState } from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton} from 'react-bootstrap';
import './main.css';
import CrearReceta from './crearReceta';
import Recetario from './recetario'
import{BrowserRouter as Router, Switch, Route, Routes, Link, NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import CardItem from './cards/cardItem';
import editarPerfil from './editarPerfil';
import Footer from './footer';
import { traerRecetas, getLocalStorage, filtrarRecetaController } from '../controller/app-controller';



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
const initialValues = {categoria: "", ingredientes:"", dificultad:""};  
const [filtroState,setFiltroState] = useState(initialValues);  
const [categoriaState,setCategoriaState] = useState('');
const [ingredientesState,setIngredientesState] = useState('');
const [dificultadState,setDificultadState] = useState('');
document.body.style.backgroundColor= "bisque";
traerRecetas();
let almacenamientoLocal = getLocalStorage();
let recetas = almacenamientoLocal.getObj("recetasPublicadas");
console.log("recetas pagina",almacenamientoLocal.getObj("recetasPublicadas"));

const handleCategoria = (e) =>{
    console.log("AAAA");
    setCategoriaState(e);
    console.log("EVENTO",e);
    console.log(categoriaState);
  }
  const handleIngredientes = (e) =>{
    console.log("AAAA");
    setIngredientesState(e);
    console.log("EVENTO",e);
    console.log(ingredientesState);
  }

  const handleDificultad = (e) =>{
    console.log("AAAA");
    setDificultadState(e);
    console.log("EVENTO",e);
    console.log(dificultadState);
  }

const handleFiltrar = async function(e) {
    e.preventDefault();
    
    let validacion = validate();
    if(validacion){
        let filtro = {
            ingredientes: ingredientesState,
            categoria: categoriaState,
            dificultad: dificultadState,
        }
        let respuesta = await filtrarRecetaController(filtro);
        if (respuesta.rdo===0 )
            {
                console.log("SE FILTRO CARAJO");
                //setIsSubmit(true);
                
                //handleMain();
                //redirect();
                navegar('/filtroRecetas');
            }
            if (respuesta.rdo===1)
            {
                alert(respuesta.mensaje)
            }
    }
    else{
        console.log("NO FILTRA")
    }
}


const navegar = useNavigate();

const validate = () =>{
    let vacio = 0;
    if(categoriaState){
        vacio = vacio + 1;
    }

    if(ingredientesState){
        vacio = vacio + 1;
    }

    if(dificultadState){
        vacio = vacio + 1;
    }
    return vacio;
}

 return ( 
     <div>
        <div className='wrapper'>
            <MainNavigation /> 
            <div id="containerRecetario">
                <div id="barraLateral">

                    <div className='dropdowns'>
                        <DropdownButton id="dropdown-item-button" title="Categoría" name="categoria" onSelect={handleCategoria}>
                            <Dropdown.Item eventKey="Cena">Cena</Dropdown.Item>
                            <Dropdown.Item  eventKey="Merienda">Merienda</Dropdown.Item>
                            <Dropdown.Item eventKey="Postre">Postre</Dropdown.Item>
                        </DropdownButton>
                        {categoriaState && (
                        <Form.Label className='text-center' style={{width:"100%"}}> {categoriaState} </Form.Label>
                        )}

                        <br/>
                        <DropdownButton id="dropdown-item-button" title="Ingrediente" onSelect={handleIngredientes}>
                            <Dropdown.Item eventKey="Papa">Papa</Dropdown.Item>
                            <Dropdown.Item eventKey="Carne">Carne</Dropdown.Item>
                            <Dropdown.Item eventKey="Chocolate">Chocolate</Dropdown.Item>
                        </DropdownButton>
                        {ingredientesState && (
                        <Form.Label className='text-center' style={{width:"100%"}}> {ingredientesState} </Form.Label>
                        )}

                        <br/>
                        <DropdownButton id="dropdown-item-button" title="Dificultad" onSelect={handleDificultad}>
                            <Dropdown.Item eventKey="Facil">Facil</Dropdown.Item>
                            <Dropdown.Item eventKey="Intermedia">Intermedia</Dropdown.Item>
                            <Dropdown.Item eventKey="Avanzada">Avanzada</Dropdown.Item>
                        </DropdownButton>
                        {dificultadState && (
                        <Form.Label className='text-center' style={{width:"100%"}}> {dificultadState} </Form.Label>
                        )}
                        
                        <Button id= "btncrear" variant="primary" type="submit" onClick={handleFiltrar}>
                            Filtrar
                        </Button>
                        
                        

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
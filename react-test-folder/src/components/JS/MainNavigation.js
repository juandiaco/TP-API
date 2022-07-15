import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';
import{BrowserRouter as Router, Switch, Route, Link, NavLink, useNavigate} from "react-router-dom"

import { getLocalStorage, misRecetasController } from '../controller/app-controller';



function MainNavigation(){


let dataUser = getLocalStorage();
console.log(dataUser.getItem("nombre"));    
console.log("ID USUARIO",dataUser.getItem("id"))

const navegar = useNavigate();

const handleMisRecetas = async function (){
    
    misRecetasController();
    navegar('/misRecetas');
}



return (
    <div>
    <Navbar bg="light" expand="lg">
        <Container>
            
            <Navbar.Brand>
                <Nav.Link as={Link} to="/main">Recetar</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link onClick={handleMisRecetas}>Mis Recetas</Nav.Link>
                <Nav.Link as={Link} to="/crearReceta">Crear</Nav.Link>
                <NavDropdown title={dataUser.getItem("nombre")} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/editarPerfil">Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Inicio">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>



);
}

export default MainNavigation
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';
import{BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom"

function MainNavigation(){

return (
    <div>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                Recetar
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Recetario</Nav.Link>
                <Nav.Link as={Link} to="/crearReceta">Crear</Nav.Link>
                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>



);
}

export default MainNavigation
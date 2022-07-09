import React, {useState, useEffect} from "react";
import {Form,section, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton,Col,Row,Card, CardImg, InputGroup, FormControl} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import MainNavigation from "./MainNavigation";
import CardItem from "./cards/cardItem";

import { editController, getLocalStorage } from "../controller/app-controller";

let almacenamientoLocal = getLocalStorage();

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
]
function EditarPerfil(){
    document.body.style.backgroundColor= "bisque";

    const initialValues = {username:"", email:"", password:"", password2:"", fecha:""};
    const [formValues, setFormValues] = useState(initialValues)
    const [formErros, setFormErrors] = useState({});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }

    const handleSubmit = async function(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log(formValues);
        if (Object.keys(formErros).length === 0){
            let userTemporal = completarUsuario();
            console.log("USER TEMPORAL",userTemporal);
            
            let edicion = await editController(userTemporal);
            if (edicion.rdo===0 )
            {
                console.log("SE EDITO CARAJO");

            }
            if (edicion.rdo===1)
            {
                alert(edicion.mensaje)
            }
         
        }
        
    }
    
    const completarUsuario = function(){
        
        console.log("NOMBRE",almacenamientoLocal.nombre,"     Contraseña ",almacenamientoLocal.password);
        let usuarioArmado;
        let name;
        let contraseña;
        if(formValues.username){
            name = formValues.username;
        }
        else{
            name = almacenamientoLocal.nombre;
        }

        if(formValues.password){
            contraseña = formValues.password;
        }
        else{
            contraseña = almacenamientoLocal.password;
        }
        
        usuarioArmado = {
            name: name,
            password: contraseña,
            _id: almacenamientoLocal.id
        }

        
        return usuarioArmado;
    }

    const validate = (values) => {

        const errors = {};
        console.log(values.username);
        if (!values.username){
            errors.username = "Ingresa tu nombre";
        }
        console.log(values.password);
        console.log(values.password2);

        
        if (!values.password){
            errors.password = "Ingresa tu contraseña";
        }
        else if(values.password.length < 4){
            errors.password = "La contraseña tiene menos de 4 caracteres";
        }

        if(values.password.localeCompare(values.password2) ){
            errors.password2= "Las contraseñas no coinciden";
            console.log("contraseñas no coinciden");
        }

        return errors;
    }
    


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
                                <Card.Title id="titulocard"> {almacenamientoLocal.nombre} </Card.Title>
                                <CardImg class="header" src={"/comidas/pfp.jpg"} alt={"Foto de Perfil"}></CardImg>
                                <Button variant="primary" id="botonheader"> Cambiar Foto </Button>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic.addon1"> Nombre </InputGroup.Text>
                                                <FormControl
                                                placeholder={almacenamientoLocal.nombre}
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                type="text" name="username" 
                                                value={formValues.username} onChange={handleChange}/>
                                                <p className='errorLogin'>{formErros.username}</p>
                                            </InputGroup>
                                            <InputGroup>
                                            <InputGroup.Text>Contraseña</InputGroup.Text>
                                            <FormControl aria-label="With textarea" 
                                            placeholder="Escriba su contraseña"
                                            type="password" name="password"
                                            value={formValues.password} onChange={handleChange}/>
                                            <p className='errorLogin'>{formErros.password}</p>
                                            </InputGroup>

                                            <InputGroup>
                                            <InputGroup.Text>Repetir la contraseña</InputGroup.Text>
                                            <FormControl aria-label="With textarea" 
                                            placeholder="Escriba de nuevo su contraseña"
                                            type="password" name="password2"
                                            value={formValues.password2} onChange={handleChange}/>
                                            </InputGroup>
                                            <p className='errorLogin'>{formErros.password2}</p>
                                            <Button type="submit" variant="primary" id="btncrear">
                                        
                                            Guardar Cambios
                                        
                                            </Button>
                                    </Form>
                                </Card.Body>
                                <Card.Footer>
                                    
                                </Card.Footer>
                            </Card>

                        </Col>
                    </Row>
                </Container>
                <div id="listadoRecetas">
                    <div className="containerRecetario">
                        <h2 id="hrec"> Mis Recetas </h2>
                    <Row className="g-2 recetariosLista">
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
                            calificacion={card.calificacion}/>
                        </Col>
                ))}
                </Row>
                </div>
                </div>

            </div>
        </div>
        
    )
}

export default EditarPerfil;
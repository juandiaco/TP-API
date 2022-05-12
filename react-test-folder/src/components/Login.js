
import { Link } from 'react-router-dom';
import {Form, FormGroup, Button,} from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './login.css';
function Login(){
    return (
        <div class="container">

                    <h1 class="container text-center">Bienvenido</h1>
                    <h2> ¿List@ para cocinar? </h2>
                    <div class="container text-center">
                        <Form>
                            <Form.Group  controlId="formBasicEmail">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control className={classes.inputMail} type="email" placeholder="Ingresas tu correo electrónico" />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">


                                        <Form.Label>Contraseña</Form.Label>



                                    <Form.Control className={classes.inputPass} type="password" placeholder="Ingresa tu contraseña" />


                                    
                            </Form.Group>
                            <Link class="" to='/main'><button class="btn btn-primary btn-lg">Listo!</button></Link>
                        </Form>
                    </div>



        </div>

);
}

export default Login;

import { Link } from 'react-router-dom';
import {Form, FormGroup, Button,} from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

function Login(){
    document.body.style.backgroundColor= "bisque";
    return (
        <div class="containerLogin">
                    <h1 className="container text-center tituloLogin">¡Bienvenido!</h1>
                    <h2 className='container text-center subtituloLogin'> ¿List@ para cocinar? </h2>
                    <div class="container text-center">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                    <Form.Label className='labelLogin'>Correo Electrónico</Form.Label>
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Control className="formcontrol" type="email" placeholder="Ingresa tu correo electrónico" />
                                        </Col>
                                    </Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                    <Form.Label className='labelLogin'>Contraseña</Form.Label>
                                    <Form.Control className="formcontrol" type="password" placeholder="Ingresa tu contraseña" />
                            </Form.Group>

                            <Link class="" to='/main'><button className="btn btn-primary btn-lg btn">¡Listo!</button></Link>
                            <br/>
                            <Link class="" to='/RecuperoContraseña'><button className="btn"> Olvidé mi contraseña </button></Link>
                            
                        </Form>
                    </div>



        </div>

);
}

export default Login;
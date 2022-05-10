
import {Form, FormGroup, Button,} from 'react-bootstrap';
import classes from './login.css';
function Login(){
    return (
        <div>
            <div class="wrapper">
                <div class="box box1">
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
                            <Button variant="primary" type="submit">
                                    ¡Listo!
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </div>

);
}

export default Login;
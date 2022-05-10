import {Form, FormGroup, Button,} from 'react-bootstrap';

function Prueba(){
 return ( 
    <div>
        <h1>PRUEBA</h1>
        <div class="container text-center">

        
            <Form>
                    <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresas tu correo electrónico" />

                    </Form.Group>

                    <Form.Group  controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                            ¡Listo!
                    </Button>
            </Form>
        </div>
    </div>   
);}

export default Prueba;
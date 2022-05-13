
import {Form, FormGroup, Button,} from 'react-bootstrap';


function Registrar(){
    return (
        <div>
            <div > 
            <h1 className='tituloCrear'>Las mejores recetas en un sólo lugar.</h1>
            </div>
            <div class="container text-center"  >
                <Form className='inputLogin'>
                    <div>
                        <h2 class="text-center">  Creá tu perfil</h2>
                    </div>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control  type="email" placeholder="Ingresa tu nombre" />
                </Form.Group>

                <Form.Group>
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control  type="email" placeholder="Ingresa tu correo electrónico" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control  type="password" placeholder="Repetí tu contraseña" />               
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control type="date" placeholder="Ingresas tu correo electrónico" />

                    </Form.Group>
                    <br/>

                    <Button variant="primary" type="submit">
                            ¡Listo!
                    </Button>

                </Form>
                </div>


        </div>
       
    );
}

export default Registrar;
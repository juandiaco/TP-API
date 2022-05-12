import React from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';

function CrearReceta(){
    return (
        <div style={{ display: 'block', 
                      width: 700, 
                      padding: 30 }}>
          <Form>
          <Form.Group>
              <Form.Label>Título de la Receta:</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Ingredientes:</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Procedimiento:</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tiempo estimado:</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Dificultad:</Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
               Publicar
            </Button>
            <Button variant="primary" type="submit">
               Guardar como Borrador
            </Button>
          </Form>
        </div>
      );

}

export default CrearReceta;
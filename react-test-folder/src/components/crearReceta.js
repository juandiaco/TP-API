import React from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton} from 'react-bootstrap';
import MainNavigation from './MainNavigation';

function CrearReceta(){
  document.body.style.backgroundColor= "bisque";
    return (
        <div> 
          <MainNavigation /> 
          <div style={{ display: 'block', 
                        width: 700, 
                        padding: 30,
                        margin: "auto",}}>
            <Form className='rounded p-4 p-sm-3'>
                    <div>
                        <h2 class="text-center">  Nueva Receta</h2>
                    </div>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control  type="titulo" placeholder="" />
                </Form.Group>
                <br/>

                <Form.Group>
                        <Form.Label>Tiempo Estimado</Form.Label>
                        <Form.Control  type="tiempoest" placeholder=""/>               
                    </Form.Group>
                  
                <br/>

                <DropdownButton id="dropdown-item-button" title="Seleccionar Dificultad">
                  <Dropdown.ItemText>Fácil</Dropdown.ItemText>
                  <Dropdown.Item as="button">Intermedia</Dropdown.Item>
                  <Dropdown.Item as="button">Avanzada</Dropdown.Item>
                  </DropdownButton>
                
                  <br/>

                    <Form.Group>
                        <Form.Label>Ingredientes necesarios</Form.Label>
                        <Form.Control type="ingredientes" placeholder="" />
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                       <Form.Label>Procedimiento</Form.Label>
                       <Form.Control id="inputproc" as="textarea" rows={3} />
                       </Form.Group>

                    <br/>

                    <Form.Label className='mb-3' for="customFile"> Subi una foto </Form.Label>
                    <Form.Control type="file" id="customFile" />

                    <br/>
                    
                    <Button variant="primary" type="submit">
                            Publicar
                    </Button>

                    <Button variant="primary" type="submit" className='botonCrear'>
                            Guardar Borrador
                    </Button>

                </Form>
          </div>
        </div>
      );

}

export default CrearReceta;
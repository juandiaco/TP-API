import React, { useState } from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MainNavigation from './MainNavigation';

function CrearReceta(){
  document.body.style.backgroundColor= "bisque";

  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const reader = new FileReader();

  const initialValues = {titulo: "", descripcion: "", duracion:"", ingredientes: "", dificultad: "", categoria: "", procedimiento: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErros, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) =>{
    const {titulo, value} = e.target;
    setFormValues ({...formValues, [titulo]: value});
    console.log(formValues);
  }

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
                        <Form.Control  type="titulo" placeholder="" value={formValues.titulo} onChange={handleChange}/>
                </Form.Group>
                <br/>

                <Form.Group>
                        <Form.Label>Tiempo Estimado (minutos)</Form.Label>
                        <Form.Control  type="tiempoest" placeholder="" value={formValues.duracion} onChange={handleChange}/>               
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
                       <Form.Control id="inputproc" as="textarea" rows={3} value={formValues.procedimiento} onChange={handleChange}/>
                       </Form.Group>

                    <br/>

                    <Form.Label className='mb-3' for="customFile"> Subi una foto </Form.Label>
                    <Form.Control type="file" id="customFile" />

                    <br/>
                    
                    <Button id= "btncrear" variant="primary" type="submit">
                            Publicar
                    </Button>

                    <Button id= "btncrear" variant="primary" type="submit" className='botonCrear'>
                            Guardar Borrador
                    </Button>

                </Form>
          </div>
        </div>
      );

}

export default CrearReceta;
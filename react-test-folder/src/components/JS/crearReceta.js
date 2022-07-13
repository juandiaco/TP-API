import React, { useEffect, useState } from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { recetaController } from '../controller/app-controller';
import MainNavigation from './MainNavigation';
import { getLocalStorage } from '../controller/app-controller';


function CrearReceta(){
  document.body.style.backgroundColor= "bisque";

  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const reader = new FileReader();
  const initialValues = {titulo: "", duracion:"", ingredientes: "", dificultad: "", categoria: "", procedimiento: "", borrador: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErros, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeNumber = (e) =>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setFormValues ({duracion: e.target.value});
    }
 }
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues ({...formValues, [name]: value});
    console.log(formValues);
  }

  const handleSubmit = async function (e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErros).length === 0){
      let receta={
        titulo: formValues.titulo,
        descripcion:formValues.duracion,
        ingredientes:formValues.ingredientes,
        dificultad:formErros.dificultad,
        categoria:formErros.categoria,
        procedimiento:formErros.procedimiento
      }
      console.log(receta);

      /*let creacion = await recetaController(receta);
      if (creacion.rdo===0){
        navegar('/main');
      }*/
    }
    setIsSubmit(true);
  }

  const handleBorrador = async function (e) {
      e.preventDefault();
      setFormErrors(validate(formValues));
      if (Object.keys(formErros).length === 0){
        let receta ={
          titulo: formValues.titulo,
          categoria: formValues.categoria,
          ingredientes: formValues.ingredientes,
          duracion: formValues.duracion,
          dificultad: formValues.dificultad,
          procedimiento: formValues.procedimiento,
          borrador: true,
          creador: localStorage.getItem("id")
          
        }
        console.log("RECETA",receta);
      }
      
  }

  const navegar = useNavigate();

  useEffect(() =>{
    console.log(formErros);
    if (Object.keys(formErros).length === 0 && isSubmit){
      console.log(formValues);
    }
  }, [formErros]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.titulo){
      errors.titulo = "Ingresa el titulo";
    }
    return errors;



  }



    return (
        <div> 
          <MainNavigation /> 
          <div style={{ display: 'block', 
                        width: 700, 
                        padding: 30,
                        margin: "auto",}}>
            <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
                    <div>
                        <h2 class="text-center">  Nueva Receta</h2>
                    </div>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control  type="text" name="titulo" placeholder="Titulo de la receta" value={formValues.titulo} onChange={handleChange}/>
                        <p className='errortitulo'>{formErros.titulo}</p>
                </Form.Group>
                <br/>

                <Form.Group>
                        <Form.Label>Tiempo Estimado (minutos)</Form.Label>
                        <Form.Control  type="text" pattern='[0-9]*' placeholder=""  onChange={onChangeNumber}/>               
                        
                    </Form.Group>
                  
                <br/>

                <DropdownButton name="dificultad" title="Seleccionar Dificultad" value={formValues.dificultad} onChange={handleChange}>
                  <Dropdown.Item>Fácil</Dropdown.Item>
                  <Dropdown.Item>Intermedia</Dropdown.Item>
                  <Dropdown.Item>Avanzada</Dropdown.Item>
                  </DropdownButton>
                
                  <br/>

                  <select value="Seleccionar Dificultad" name='dificultad' onChange={handleChange}>
                    <option value="Seleccionar Dificultad">Seleccionar Dificultad</option>
                    <option value="Facil">Facil</option>
                    <option value="Intermedia">Intermedia</option>
                    <option value="Avanzada">Avanzada</option>
                  </select>

                  <br/>

                    <Form.Group>
                        <Form.Label>Ingredientes necesarios</Form.Label>
                        <Form.Control type="text" name="ingredientes" as='textarea' placeholder="Lista de Ingredientes" value={formValues.ingredientes} onChange={handleChange} />
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                       <Form.Label>Procedimiento</Form.Label>
                       <Form.Control type="text" name="procedimiento" as="textarea" rows={3} value={formValues.procedimiento} onChange={handleChange}/>
                       </Form.Group>

                    <br/>

                    <Form.Label className='mb-3' for="customFile"> Subi una foto </Form.Label>
                    <Form.Control type="file" id="customFile" />

                    <br/>
                    
                    <Button id= "btncrear" variant="primary" type="submit">
                            Publicar
                    </Button>

                    <Button id= "btncrear" variant="primary" type="submit" className='botonCrear' onClick={handleBorrador}>
                            Guardar Borrador
                    </Button>

                </Form>
          </div>
        </div>
      );

}

export default CrearReceta;
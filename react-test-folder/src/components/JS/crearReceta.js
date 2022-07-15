import React, { useEffect, useState } from 'react';
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container,Dropdown,DropdownButton} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { recetaController } from '../controller/app-controller';
import MainNavigation from './MainNavigation';
import { getLocalStorage } from '../controller/app-controller';
import urlWebServices from '../controller/conf-api';
import Footer from './footer';

function CrearReceta(){

  
  document.body.style.backgroundColor= "bisque";

  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const initialValues = {titulo: "", duracion:"", ingredientes: "", dificultad: "", categoria: "Nada", procedimiento: "", borrador: "", imagen: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErros, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [categorias, setCategorias] = useState("");

  const previewFile = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      setPreviewSource(reader.result);
    }
  }

  const convertirImagen = function (){
    console.log(previewSource);
  }

  const handleFileInputChange=(e) => {
    const file = e.target.files[0];
    previewFile(file);
    convertirImagen()
  }


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



  const handleBorrador = async function (e) {
      e.preventDefault();
      setFormErrors(validate(formValues));
      if (Object.keys(formErros).length === 0){
        let receta ={
          titulo: formValues.titulo,
          categoria: categorias,
          ingredientes: formValues.ingredientes,
          duracion: formValues.duracion,
          dificultad: formValues.dificultad,
          procedimiento: formValues.procedimiento,
          borrador: true,
          creador: localStorage.getItem("id"),
          imagenReceta: previewSource,

          
        }
        console.log("RECETA",receta);
        let creacion = await recetaController(receta);
        if (creacion.rdo===0 )
            {
                console.log("SE CREO RECETA CARAJO");
                //setIsSubmit(true);
                
                //handleMain();
                //redirect();
                navegar('/main');
            }
            if (creacion.rdo===1)
            {
                alert(creacion.mensaje)
            }
             
      }
      
  }

  const handlePublicar = async function (e) {
    e.preventDefault();
      setFormErrors(validate(formValues));
      if (Object.keys(formErros).length === 0){
        let receta ={
          titulo: formValues.titulo,
          categoria: categorias,
          ingredientes: formValues.ingredientes,
          duracion: formValues.duracion,
          dificultad: formValues.dificultad,
          procedimiento: formValues.procedimiento,
          borrador: false,
          creador: localStorage.getItem("id"),
          imagenReceta: previewSource,

          
        }
        console.log("RECETA",receta);
        let creacion = await recetaController(receta);
        if (creacion.rdo===0 )
            {
                console.log("SE CREO RECETA CARAJO");
                //setIsSubmit(true);
                
                //handleMain();
                //redirect();
                navegar('/main');
            }
            if (creacion.rdo===1)
            {
                alert(creacion.mensaje)
            }
             
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
    

    if (!values.titulo){
      errors.titulo = "Ingresa el titulo";
    }

    if(!values.duracion){
      errors.duracion = "Ingresa la duración";
    }

    if(!values.ingredientes){
      errors.ingredientes = "Ingresar ingredientes";
    }

    if(!values.dificultad){
      errors.dificultad = "Seleccionar dificultad";
    }

    if(formValues.categoria.includes("Desayuno") === false && formValues.categoria.includes("Almuerzo") === false && formValues.categoria.includes("Merienda") === false && formValues.categoria.includes("Cena") === false){
      errors.categoria = "Ingresar categoria/s";
    }

    if(!formValues.procedimiento){
      errors.procedimiento = "Ingresar el procedimiento";
    }



    return errors;
  }

  const handleCheckBox = (e) =>{
    let varForm = formValues.categoria;
    console.log("VARFORM",varForm);
    if(e.target.checked){

       if(varForm.localeCompare("Nada") !== 0){

          console.log("MAAS");
          varForm = varForm + "|" + e.target.value;
          
        }
        else{
          varForm = e.target.value;
          console.log("VACIOOO");
        }
        console.log(varForm);
    }
    else{
      varForm = varForm.replace(e.target.value,"");
    
    }
    
    setCategorias(varForm);
    setFormValues({...formValues, categoria: varForm});
    console.log("CHECKBOX", formValues);
    
  }

  function selectOnlyThis(id){
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,function(el){
      el.checked = false;
    });
    id.checked = true;
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
                        <Form.Control  type="text" name="titulo" placeholder="Titulo de la receta" value={formValues.titulo} onChange={handleChange}/>
                        <p className='errorLogin'>{formErros.titulo}</p>
                </Form.Group>
                <br/>

                <Form.Group>
                        <Form.Label>Tiempo Estimado (minutos)</Form.Label>
                        <Form.Control  type="number" name="duracion" value={formValues.duracion} onChange={handleChange}/>               
                        <p className='errorLogin'>{formErros.duracion}</p>
                    </Form.Group>
                  
                <br/>

                <Form.Group id="formdif">
                    <Form.Label>Seleccionar Dificultad</Form.Label>
                    <br/>
                    <select value="Seleccionar Dificultad" name='dificultad' onChange={handleChange}>
                      <option value="Seleccionar Dificultad">Seleccionar Dificultad</option>
                      <option id="opd" value="Facil">Facil</option>
                      <option id="opd" value="Intermedia">Intermedia</option>
                      <option id="opd" value="Avanzada">Avanzada</option>
                    </select>
                    <p className='errorLogin'>{formErros.dificultad}</p>
                  </Form.Group>
                  <br/>
                  <br/>

                  <Form.Group>
                    <Form.Label>Seleccionar Categoria</Form.Label>
                    <br/>

                    <Form.Check type="radio" name="myCheckbox" value="Desayuno" label="Desayuno" onChange={handleCheckBox}></Form.Check>
                    <Form.Check type="radio" name="myCheckbox"value="Almuerzo" label="Almuerzo" onChange={handleCheckBox}></Form.Check>
                    <Form.Check type="radio" name="myCheckbox"value="Merienda" label="Merienda" onChange={handleCheckBox}></Form.Check>
                    <Form.Check type="radio" name="myCheckbox"value="Cena" label="Cena" onChange={handleCheckBox}></Form.Check>
                    <p className='errorLogin'>{formErros.categoria}</p>
                  </Form.Group>

                    <Form.Group>
                        <Form.Label>Ingredientes necesarios</Form.Label>
                        <Form.Control type="array" name="ingredientes" as='textarea' placeholder="Lista de Ingredientes" value={formValues.ingredientes} onChange={handleChange} />
                        <p className='errorLogin'>{formErros.ingredientes}</p>
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                       <Form.Label>Procedimiento</Form.Label>
                       <Form.Control type="text" name="procedimiento" as="textarea" rows={3} value={formValues.procedimiento} onChange={handleChange}/>
                       <p className='errorLogin'>{formErros.procedimiento}</p> 
                      </Form.Group>

                    <br/>

                    <Form.Label className='mb-3' for="customFile"> Subi una foto </Form.Label>
                    <Form.Control type="file" id="customFile" name="imagen" value={fileInputState} onChange={handleFileInputChange} />
                    {previewSource && (
                        <img src={previewSource} style={{height: '370px'}} alt="Foto"/>
                    )}

                    <br/>
                    
                    <Button id= "btncrear" variant="primary" type="submit" onClick={handlePublicar}>
                            Publicar
                    </Button>

                    <Button id= "btncrear" variant="primary" type="submit" className='botonCrear' onClick={handleBorrador}>
                            Guardar Borrador
                    </Button>

                </Form>
          </div>
        <Footer />
        </div>
      );

}

export default CrearReceta;
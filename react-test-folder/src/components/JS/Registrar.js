
import {Form, FormGroup, Button, Image} from 'react-bootstrap';
import { useState, useEffect} from "react";
import{useNavigate} from 'react-router-dom';

import { createController } from '../controller/app-controller';

function Registrar(){
    
    document.body.style.backgroundColor= "bisque";

    const [fileInputState, setFileInputState] = useState('');
   
    const [previewSource, setPreviewSource] = useState("");
    const reader = new FileReader();
    const initialValues = {username:"", email:"", password:"", password2:"", fecha:"",imagen:""};
    const [formValues, setFormValues] = useState(initialValues)
    const [formErros, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previeFile(file);
        convertirImagen()
        
    }

    const previeFile = (file) =>{
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setPreviewSource(reader.result);
        }
    }

    const handleChange = (e) => {


        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }
    const handleSubmit = async function(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (Object.keys(formErros).length === 0){
            let user = {
                email: formValues.email,
                password: formValues.password,
                name: formValues.username,
                date: formValues.fecha,
                perfil: previewSource
            }
            console.log(user);

            let creacion = await createController(user);
            if (creacion.rdo===0 )
            {
                console.log("SE LOGEO CARAJO");
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
        setIsSubmit(true);
    }
        

const convertirImagen = function(){
    console.log(previewSource);
    
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

        if (!values.username){
            errors.username = "Ingresa tu nombre";
        }

        if (!values.email){
            errors.email = "Ingresa tu correo electr??nico";
        }
        else if(!regex.test(values.email)){
            errors.email = "No es un formato v??lido de correo electr??nico";
        }
 
        if (!values.password){
            errors.password = "Ingresa tu contrase??a";
        }
        else if(values.password.length < 4){
            errors.password = "La contrase??a tiene menos de 4 caracteres";
        }

        if(values.password.localeCompare(values.password2) ){
            errors.password2= "Las contrase??as no coinciden";
            console.log("contrase??as no coinciden");
        }

        if(!values.fecha){
            errors.fecha = "Ingresa tu fecha de nacimiento";
        }
        

        return errors;
    }
    
    
    return (


        <div class="container text-center containerLogin">
            <div class="loginc">
               
                <Form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="text-center">  Cre?? tu perfil</h2>
                    </div>
                    <Form.Group >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className="formcontrolRegistrar" type="text" name="username" placeholder="Ingresa tu nombre" value={formValues.username} onChange={handleChange} />
                        <p className='errorLogin'>{formErros.username}</p>
                        
                        
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Correo Electr??nico</Form.Label>
                        <Form.Control className="formcontrolRegistrar" type="text" name="email" placeholder="Ingresa tu correo electr??nico" value={formValues.email} onChange={handleChange} />
                        <p className='errorLogin'>{formErros.email}</p>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contrase??a</Form.Label>
                        <Form.Control className="formcontrolRegistrar" type="password" name="password" placeholder="Ingresa tu contrase??a" value={formValues.password} onChange={handleChange}/>
                        <p className='errorLogin'>{formErros.password}</p>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirmar contrase??a</Form.Label>
                        <Form.Control className=".formcontrolRegistrar" type="password" name="password2" placeholder="Repet?? tu contrase??a" value={formValues.password2} onChange={handleChange}/>               
                        <p className='errorLogin'>{formErros.password2}</p>
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control type="date" name="fecha" value={formValues.fecha} onChange={handleChange}/>
                        <p className='errorLogin'>{formErros.fecha}</p>
                    </Form.Group>
                    

                    <Form.Label className='mb-3' for="customFile"> Subi una foto de perfil </Form.Label>
                    <Form.Control type="file" id="customFile" name="imagen" value={fileInputState} onChange={handleFileInputChange} />
                    <br/>
                    {previewSource && (
                        <img src={previewSource} style={{height: '75px'}} />
                    )}
                    <br/>
                    <br/>

                    <Button variant="primary" type="submit">
                            ??Listo!
                    </Button>

                </Form>
            </div>

                
        </div>

       
    );
}

export default Registrar;
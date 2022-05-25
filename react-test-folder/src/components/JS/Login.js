
import { Link, Navigate} from 'react-router-dom';
import {Form, FormGroup, Button,} from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect} from "react";


function Login(){
    document.body.style.backgroundColor= "bisque";

    const initialValues = {username:"", email:"", password:"", password2:"", fecha:""};
    const [formValues, setFormValues] = useState(initialValues)
    const [formErros, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
        
    const handleChange = (e) => {


        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));

        setIsSubmit(true);
    }
        
   
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
            errors.email = "Ingresa tu correo electrónico";
        }
        else if(!regex.test(values.email)){
            errors.email = "No es un formato válido de correo electrónico";
        }
 
        if (!values.password){
            errors.password = "Ingresa tu contraseña";
        }
        else if(values.password.length < 4){
            errors.password = "La contraseña tiene menos de 4 caracteres";
        }

        if(values.password.localeCompare(values.password2) ){
            errors.password2= "Las contraseñas no coinciden";
            console.log("contraseñas no coinciden");
        }

        if(!values.fecha){
            errors.fecha = "Ingresa tu fecha de nacimiento";
        }
        

        return errors;
    }

    const handleMain = () => {
        <Navigate to="/main" replace={true} />
    }

    return (
        <div className='loginc'>
            <div class="containerLogin">
                        <h1 className="container text-center tituloLogin">¡Bienvenido!</h1>
                        <h2 className='container text-center subtituloLogin'> ¿List@ para cocinar? </h2>
                        <div class="container text-center">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                        <Form.Label className='labelLogin'>Correo Electrónico</Form.Label> 
                                        <Form.Control name="email" className="formcontrolLogin" type="text" placeholder="Ingresa tu correo electrónico" value={formValues.email} onChange={handleChange}/>        
                                        <p className='errorLogin'>{formErros.email}</p>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                        <Form.Label className='labelLogin'>Contraseña</Form.Label>
                                        <Form.Control className="formcontrolLogin" type="password" name="password" placeholder="Ingresa tu contraseña" value={formValues.password} onChange={handleChange}/>
                                        <p className='errorLogin'>{formErros.password}</p>
                                </Form.Group>

   
                                <Link class="" to='/main'><button className="btn btn-primary btn-lg btn">¡Listo!</button></Link>
                                <br/>
                                <Link class="" to='/RecuperoContraseña'><button className="btn"> Olvidé mi contraseña </button></Link>
                                
          

                            </Form>
                        </div>



            </div>
            </div>
        
        
        

);
}

export default Login;
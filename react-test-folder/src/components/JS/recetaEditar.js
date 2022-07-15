import React,{useState} from "react";
import MainNavigation from "./MainNavigation";
import {Form, Accordion, AccordionButton, AccordionCollapse, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton,Tab,Tabs} from 'react-bootstrap';
import { getLocalStorage, recetaTemporal, traerRecetaCompletaCon, editReceta } from "../controller/app-controller";
import { Cloudinary } from "cloudinary-core";



function RecetaEditar(){
    const cloudinaryCore = new Cloudinary({cloud_name:'deaivh2un'});
    document.body.style.backgroundColor= "bisque";
    let almacenamientoLocal = getLocalStorage();
    let receta = almacenamientoLocal.getObj("recetaTemporal");
    console.log("recetas pagina",receta);

    const initialValues = {categoria:"", dificultad:"", ingredientes:"",procedimiento:""};
    const [formValues, setFormValues] = useState(initialValues)
    
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }


    const handleGuardar = async function(e){
        e.preventDefault();
        //let recetaEditada = completarReceta();
        let recetaEditada = {
            procedimiento: formValues.procedimiento,
            dificultad: formValues.dificultad,
            _id: receta._id,
            ingredientes: formValues.ingredientes,
            categoria: formValues.categoria
        }
        console.log("EDICION",recetaEditada);
        let edicion = await editReceta(recetaEditada);
        if (edicion.rdo===0 )
            {
                console.log("SE EDITO");

            }
            if (edicion.rdo===1)
            {
                alert(edicion.mensaje)
            }


    }


    const completarReceta = function(){
        
        
        let recetaArmada;
        let ingredientes;
        let procedimiento;
        let categoria;
        let dificultad;
        if(formValues.ingredientes){
            ingredientes = formValues.ingredientes;
        }
        else{
            ingredientes = receta.ingredientes;
        }

        if(formValues.procedimiento){
            procedimiento = formValues.procedimiento;
        }
        else{
            procedimiento = almacenamientoLocal.procedimiento;
        }

        if(formValues.categoria){
            categoria = formValues.categoria;
        }
        else{
            categoria = almacenamientoLocal.categoria;
        }

        if(formValues.dificultad){
            dificultad = formValues.dificultad;
        }
        else{
            dificultad = almacenamientoLocal.dificultad;
        }
        
       
        recetaArmada = {
            procedimiento: procedimiento,
            dificultad: dificultad,
            _id: receta._id,
            ingredientes: receta.ingredientes,
            categoria: receta.categoria
        }

        
        return recetaArmada;
    }


    return(
        <div className="wrapper">
            <div>
            <MainNavigation/>
            </div>     
            <Card className="cardReceta">
                <Card.Header>
                    <h1>
                     {receta.titulo}
                    </h1>
                  
                </Card.Header>
                <Card.Body>
                    Categoría:
                    <Form.Control placeholder={receta.categoria} type="text" name="procedimiento" as="textarea" rows={3} onChange={handleChange}/>
                                        
                    <br/>
                    Dificultad:
                    <Form.Control placeholder={receta.dificultad} type="text" name="procedimiento" as="textarea" rows={3} onChange={handleChange}/> 
                    <Card.Img className="imagenReceta" alt={receta.titulo} src={cloudinaryCore.url(receta.imagen)}/>
                    <Accordion className="accordionReceta">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="tituloAccordion">
                                Ingredientes 
                            </Accordion.Header>
                                <Accordion.Body> 
                                    <ListGroup>
                                        
                                        <Form.Control placeholder={receta.ingredientes} type="text" name="procedimiento" as="textarea" rows={3}/>
                                        
                                        <br/>
                                    </ListGroup>
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Procedimiento</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                <Form.Control placeholder={receta.procedimiento} type="text" name="procedimiento" as="textarea" rows={3}/>
                                        
                                
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
                <Card.Footer>
                    
                    <button className="btn" onClick={handleGuardar}>Guardar</button>
                </Card.Footer>
                
            </Card>

        </div>

    )
}

export default RecetaEditar;
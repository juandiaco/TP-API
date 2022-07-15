import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';
import { Cloudinary } from "cloudinary-core";
import { useNavigate } from 'react-router-dom';
import {deleteRecetaController} from '../../controller/app-controller';
function MyCardItem(props){
const cloudinaryCore = new Cloudinary({cloud_name:'deaivh2un'});
const handleEliminar = async function(){
    console.log("ID A ELIMINAR",props.idReceta);
    let eliminacion = deleteRecetaController(props.idReceta);
    if (eliminacion.rdo===0 )
            {
                console.log("SE CREO RECETA CARAJO");
                //setIsSubmit(true);
                
                //handleMain();
                //redirect();
                navegar('/main');
            }
            if (eliminacion.rdo===1)
            {
                alert(eliminacion.mensaje)
            }
}

const navegar = useNavigate();

return(
    <div>
        
        <Card className='cardmain' key={props._id}> 
            <Card.Img className='imagenCard' alt={props.titulo} src={cloudinaryCore.url(props.imagen)}/>
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <br></br>
                <Card.Subtitle>Chefcito: {props.chef} </Card.Subtitle>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Dificultad: {props.dificultad} </ListGroupItem>
                    <ListGroupItem>Categoría: {props.categoria} </ListGroupItem>
                    <ListGroupItem>Calificación: {props.calificacion} </ListGroupItem>
                    </ListGroup>
                    <Card.Footer className='cardfooter'>
                    <div className='containerbtnver'>
                    <Button variant="primary" className='btnver'>
                        <a href="/recetaCompleta"> Ver </a>
                    </Button>
                    <Button variant='primary' className='btnver'>Editar</Button>
                    <Button variant='primary' className='btnver' onClick={handleEliminar}>Eliminar</Button>
                    </div>
                    
                    </Card.Footer>
            </Card.Body>
        </Card>


    </div>


);
}
export default MyCardItem;
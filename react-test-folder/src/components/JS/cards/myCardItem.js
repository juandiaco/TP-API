import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';
import { Cloudinary } from "cloudinary-core";

function MyCardItem(props){
const cloudinaryCore = new Cloudinary({cloud_name:'deaivh2un'});
return(
    <div>
        
        <Card className='cardmain'>
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
                    <Button variant='primary' className='btnver'>Eliminar</Button>
                    </div>
                    
                    </Card.Footer>
            </Card.Body>
        </Card>


    </div>


);
}
export default MyCardItem;
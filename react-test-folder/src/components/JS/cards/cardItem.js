import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';
import { Cloudinary } from "cloudinary-core";
import { useNavigate } from 'react-router-dom';
import {geLocalStorage, recetaTemporal} from '../../controller/app-controller';


function CardItem(props){
const cloudinaryCore = new Cloudinary({cloud_name:'deaivh2un'});

const navegar = useNavigate();

const handleVer = function(){

    let receta = {
        chef: props.chef,
        titulo: props.titulo,
        duracion: props.duracion,
        ingredientes: props.ingredientes,
        dificultad: props.dificultad,
        categoria: props.categoria,
        procedimiento: props.procedimiento,
        imagen: props.imagen,
        puntaje: props.puntaje,
       
    }

    recetaTemporal(receta);
    console.log("aaa", receta)
    navegar('/recetaCompleta');

}
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
                    <Button variant="primary" className='btnver' onClick={handleVer}>
                        <a> Ver </a>
                    </Button>
                    </div>
                    
                    </Card.Footer>
            </Card.Body>
        </Card>


    </div>


);
}

export default CardItem;
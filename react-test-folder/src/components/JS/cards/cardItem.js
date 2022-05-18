import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem} from 'react-bootstrap';

function CardItem(props){
return(
    <div>
        
        <Card className='cardmain'>
            <Card.Img className='imagenCard' alt={props.titulo} src={props.imagen}/>
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
                    </div>
                    
                    </Card.Footer>
            </Card.Body>
        </Card>


    </div>


);
}

export default CardItem;
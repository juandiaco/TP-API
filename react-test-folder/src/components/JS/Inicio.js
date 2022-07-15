import { Carousel } from 'bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const slide1 = require('./slides-carrusel/slideSushi.jpg');
const slide2 = require('./slides-carrusel/slideComidas.jpg');
const slide3 = require('./slides-carrusel/slideEnsaladas.jpg');


function Inicio(){
    document.body.style.backgroundColor = "#0E9594";

    return (
    <div>    
        <header>

        <Container>
                <Row>  
                    <Col sm={12}>
                        <h1 className="container justify-content-center tituloInicio"> Recet.ar</h1>

                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2 className="container justify-content-center subtituloInicio">Cociná sencillo. Rápido. Personalizado</h2>
                    </Col>
                </Row>
        </Container>
        </header>
        <article> 

         

            <div class="container-sm justify-content-center carousel slide h-auto" id="mainSlider" data-bs-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                            <img src={slide1} class="d-block w-50"></img>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-center">
                            <img src={slide2} class="d-block w-50"></img>
                        </div>    
                    </div>
                    <div class="carousel-item">
                        <img src={slide3} class="d-block w-50"></img>
                    </div>
                
                </div>

            </div>
            
            <div class="container text-center">
                    <Link className="barra" to='/login'><button className="btn btn-primary btn-lg">Iniciar Sesión</button></Link>
                    <Link class="barra" to='/registrar'><button class="btn btn-primary btn-lg">Registrarse</button></Link>
            </div>
        </article>
    </div>
    );
}

export default Inicio;


const slide1 = require('./slides-carrusel/slide1.jpg');
const slide2 = require('./slides-carrusel/slide2.jpg');
const slide3 = require('./slides-carrusel/slide3.jpg');

function Inicio(){
    return (
    <div>    
        <header>
            <h1 class="container"> Recet.ar</h1>
            <h2 class="container">Cociná sencillo. Rápido. Personalizado.</h2>
        </header>
        <article> 
        <div class="container-sm justify-content-center carousel slide" id="mainSlider" data-bs-ride="carousel">
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
            <div class="barrita container text-center">
                    <a class="barra" href="login.html"><button class="btn btn-primary btn-lg">Iniciar sesión</button></a>
                    <a class="barra" href="registrar.html"><button class="btn btn-primary btn-lg">Registrarse</button></a>
            </div>
        </article>
    </div>
    );
}

export default Inicio;
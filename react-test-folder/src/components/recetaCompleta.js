import React from "react";
import MainNavigation from "./MainNavigation";
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton,Tab,Tabs} from 'react-bootstrap';


function RecetaCompleta(){
    document.body.style.backgroundColor= "bisque";
    return(
        <div className="wrapper">
            <div>
            <MainNavigation/>
            </div>
            <div className="container">
            <h1 className="tituloReceta"> Pollo con Papas</h1>
            <h4 className="tituloReceta"> Chefcito: Luciana Souto </h4>
            
            <h5>Categoría: Cena</h5>
            
            <h5>Ingredientes:</h5>
            <br/>
            <li> 1 Pollo trozado </li>
            <li> 4 Dientes de Ajo </li>
            <li> 200cc de Vino Blanco </li>
            <li> Sal, pimienta y laurel, a gusto </li>
            <li> 4 Papas chicas </li>
            <br/>
            <h5>Tiempo estimado: 2 Horas</h5>
            <br/>
            <h5>Procedimiento:</h5>
            <text className="cuerpo">
                <li>En una cacerola poner un chorrito de aceite de oliva y dorar las piezas de pollo. Reservar a un costado.</li>
                <li>En la misma cacerola agregar un poquito más de aceite, de ser necesario, y agregar todas las verduras (excepto el tomate y la papa) cortados en juliana.</li>
                <li>Una vez que la cebolla esté transparente, sumar el tomate triturado o picado bien fino, las piezas de pollo y condimentar. Añadir las hojas de laurel.</li>
                <li>Sumar el vasito de vino blanco y cocinar hasta que ya no se sienta el olor a alcohol. Agregar caldo hasta cubrir y sumar las papas peladas y cortadas en cubos grandes. Tapar y bajar el fuego.</li>
                <li>Cocinar aproximadamente por 30 minutos. Hasta que se pinche el pollo y salga líquido transparente y las papas estén tiernas.</li>
                <li>Rectificar los sabores, agregar las arvejas y dejar reposando un rato antes de servir.</li>
             
            </text>

            </div>

        </div>

    )
}

export default RecetaCompleta;
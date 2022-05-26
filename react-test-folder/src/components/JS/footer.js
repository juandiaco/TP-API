
import {Form, FormGroup,Button,Navbar,NavDropdown,Nav,Container, Card, Row, Col,ListGroup,ListGroupItem, Dropdown, DropdownButton, Column, Table} from 'react-bootstrap';


function Footer(){


    return(
        <div className='footer'>
            <h1>Recet.ar</h1>
            
            <Table className='tablaFooter' borderless >
            <thead>
                <tr>
                    <th>Creadores</th>
                    <th>Sobre la aplicación</th>
                    <th>Sobre nosotros</th>
                    <th>Redes sociales</th>
                </tr>
            </thead>
            <tbody>
                <tr>                
                    <td colSpan={3}>Luciana Souto</td>
                    <td>Instagram</td>
                    
                </tr>
                <tr>              
                    <td colSpan={3}>Juan Diaco</td>
                    <td>Twitter</td>
                    
                </tr>
                <tr>
                
                <td colSpan={3}></td>
                <td>Youtube</td>
                </tr>
            </tbody>
            </Table>

        </div>

    );
}

export default Footer
import { FormCheck } from "react-bootstrap";
import checkbox from "./checkbox";
import './main.css';


function CheckList(props){
return(
    <div>
        {props.ingredientes.map((checkbox) => (<FormCheck 
        key={checkbox.id}
        ingrediente={checkbox.ingrediente}
         />))}
    </div>
);
}

export default CheckList;
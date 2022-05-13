import React from "react";
import { FormCheck } from "react-bootstrap";
import './main.css';

function Checkbox(props){
    return(
        <div>
            <Form className="checkboxlist">
                {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                    id={props.ingrediente}
                    />
                </div>
                ))}
                </Form>
        </div>
    
    
    );
    }
    
    export default Checkbox;
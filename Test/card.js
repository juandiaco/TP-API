import React from "react";

function Card(){
    return(
        <div className="card">
            <img src="" alt="casi"/>
            <div className="card-body">
                <h4 className="card-title"> Titulo </h4>
                <h6> By nombreChefcito</h6>
                <p className="card-text-secondary">
                    <li>Dificultad: Facil</li>
                    <li>Tiempo estimado: 20'</li>
                    <li>Calificación: . . . . .</li>
                    <p>#cookies #merienda #dulce</p>
                    <p>Me gusta - Recomendar - Agregar a Recetario</p>
                    <a href="#!" className="btn btn-outline-secondary">
                        Ver receta
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Card
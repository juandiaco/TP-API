import React from "react";
import Card from './card'

import Cookies from '../foodpics/cookies.jpg'
import SlideBurger from '../foodpics/cookies.jpg'
import SlidePizza from '../foodpics/cookies.jpg'

//Array con los datos de cada Card.//
//Importante separar cada card con ,//
const cards= [
    {
        id:1,
        titulo: 'Cookies de Chocolate',
        image: Cookies

    },
    {
        id:2,
        titulo: 'Gran Hamburguesa',
        image: SlideBurger
    }
]

function Cards(){
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={cards.id}>
                    <Card/>
                    </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Cards
import CardItem from "./cardItem";


function CardList(props){
return(
    <div>
        {props.cards.map((card) => (<CardItem 
        key={card.id}
        image={card.imagen}
        titulo={card.titulo}
        chef={card.chef}
        descripcion={card.descripcion}
        dificultad={card.dificultad}
        categoria={card.categoria}
        calificacion={card.calificacion} />))}
    </div>
);
}

export default CardList;
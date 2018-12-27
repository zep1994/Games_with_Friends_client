import React from 'react';

const GameCard = ({game}) => (
    <div key={game.id} className="GameCard">
        <img className="Gameimg" src={game.image_url} alt={game.name} />
        <h3>{game.name}</h3> 
        <p>{game.drinks}</p>
        <p>Directions: {game.directions}</p>
    </div>
)

export default GameCard
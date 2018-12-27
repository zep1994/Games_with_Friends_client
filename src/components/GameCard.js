import React from 'react';

const GameCard = ({game}) => (
    <div key={game.id} className="GameCard">
        <h3>{game.name}</h3> 
        <p>{game.drinks}</p>
        <p>Directions: {game.directions}</p>
    </div>
)

export default GameCard
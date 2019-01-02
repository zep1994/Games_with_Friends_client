import React from 'react';

const GamePage = ({game}) => (
    <div>
        <h1>{game.name}</h1> <p>{game.drinks}</p>
    </div>
    
)

export default GamePage
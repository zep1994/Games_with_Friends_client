import React from 'react';
import { Link } from 'react-router-dom'

const GameCard = ({game}) => (
    <Link to={`/games/${game.id}`} exact >
        <div key={game.id} className="GameCard">
            <img className="Gameimg" src={game.image_url} alt={game.name} />
            <h3>{game.name}</h3> 
            <p>{game.drinks}</p>
            <p>Directions: {game.directions}</p>
        </div>
    </Link>
)

export default GameCard
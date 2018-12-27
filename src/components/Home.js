import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="HomeContainer">
            <h1>Game</h1>
            <h2>See what drinking games people are playing</h2>
            <Link to='/about' exact>Learn More</Link>
        </div>
    )
}

export default Home
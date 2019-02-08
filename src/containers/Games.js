import React, { Component } from 'react';
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import { getGames } from '../actions/games'
import { Link } from 'react-router-dom'

class Games extends Component {

    render() {
        return (
            <div className="GameContainer">
                <Link to="/games/new" exact>Add a new Game</Link>
                <h1>Games</h1>
                {this.props.games.map(game => <GameCard key={game.id} game={game} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        games: state.games
    })
}

export default connect(mapStateToProps, {getGames})(Games)

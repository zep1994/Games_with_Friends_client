import React, { Component } from 'react';
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import { getGames } from '../actions/games'

class Games extends Component {

    componentDidMount() {
        this.props.getGames()
    }

    render() {
        return (
            <div className="GameContainer">
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
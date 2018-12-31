import React, { Component } from 'react';
import { connect } from 'react-redux'
import GamePage from '../components/GamePage'
import { Button } from 'react-bootstrap'
import { deleteGame } from '../actions/games'

class GameShow extends Component {

    handleOnClick = (event, gameID, history) => {
        event.preventDefault()
        deleteGame(gameID, history)
    }

    render() {
        const { game, history } = this.props
        return(
            <div className="GameShow">
                <GamePage game={game} />
                <Button onClick={(e) => this.handleOnClick(e, game.id, history)} bsStyle="danger">Delete {game.name} </Button>
            </div>
        )
    }
   
}

const mapStateToProps = (state, newProps) => {
    const game = state.games.find(game => String(game.id) === newProps.match.params.id)
    if (game) {
        return {game: game}
    } else {
        return {game: {}}
    }
}

export default connect(mapStateToProps)(GameShow)
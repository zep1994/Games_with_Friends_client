import React from 'react';
import { connect } from 'react-redux'
import GamePage from '../components/GamePage'
import { Button } from 'react-bootstrap'

const GameShow = ({game}) => {
    return(
        <div className="GameShow">
            <GamePage game={game} />
            <Button bsStyle="danger">Delete {game.name} </Button>
        </div>
    )
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
import { resetGameForm } from './gameForm'

const API_URL = process.env.REACT_APP_API_URL

export const setGames = games => {
    return{
        type: 'GET_GAMES',
        games 
    }
}

export const getGames = () => {
    return dispatch => {
        return fetch(`${API_URL}/games`)
        .then(res => res.json())
        .then(games => dispatch(setGames(games)))
        .catch(error => console.log(error))
    }
}

export const addGame = game => {
    return {
        type: 'CREATE_GAME',
        game
    }
}

export const createGame = (game, routerHistory) => {
    return dispatch => {
        return fetch(`${API_URL}/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({game: game})
        })
        .then(res => res.json())
        .then(game => {
            dispatch(addGame(game))
            dispatch(resetGameForm())
            routerHistory.replace(`/games`)
        })
        .catch(error => {
            dispatch({type: 'ERROR'})
            routerHistory.replace(`/games/new`)
        })
    }
}
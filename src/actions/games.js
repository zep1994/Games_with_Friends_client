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
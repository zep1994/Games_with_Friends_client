export default (state = [], action) => {
    switch(action.type){
        case 'GET_GAMES':
            return action.games
        case 'REMOVE_GAME':
            return state.filter(game => game.id !== action.game.id)
        default:
            return state
    }
}
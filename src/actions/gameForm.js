export const updateGameFormData = gameFormData => {
    return {
        type: 'UPDATED_GAME',
        gameFormData
    }
}

export const resetGameForm = () => {
    return {
        type: 'RESET_GAME_FORM'
    }
}
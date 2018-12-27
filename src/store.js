import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import games from './reducers/games_reducer'

const reducers = combineReducers({ games })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(
    applyMiddleware(thunk)
    )
  )
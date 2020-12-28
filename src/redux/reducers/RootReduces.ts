import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import homeReducer from './homeReducer'

const RootReducer = combineReducers({
    pokemon: pokemonReducer,
    home: homeReducer
})

export default RootReducer
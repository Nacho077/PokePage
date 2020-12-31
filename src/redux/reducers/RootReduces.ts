import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import pokedexReducer from './pokedexReducer'

const RootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokedex: pokedexReducer
})

export default RootReducer
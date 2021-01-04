import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import pokedexReducer from './pokedexReducer'
import speciesReducer from './speciesReducer'

const RootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokedex: pokedexReducer,
    species: speciesReducer
})

export default RootReducer
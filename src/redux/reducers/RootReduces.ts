import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import pokedexReducer from './pokedexReducer'
import speciesReducer from './speciesReducer'
import pokeTypeReducer from './poketypesReducer'

const RootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokedex: pokedexReducer,
    species: speciesReducer,
    type: pokeTypeReducer
})

export default RootReducer
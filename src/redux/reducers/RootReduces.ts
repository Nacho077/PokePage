import { combineReducers } from 'redux'
import animesReducer from './animesReducer'
import pokemonReducer from './pokemonReducer'
import pokedexReducer from './pokedexReducer'
import speciesReducer from './speciesReducer'
import regionsReducer from './regionsReducer'
import pokeTypeReducer from './poketypesReducer'

const RootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokedex: pokedexReducer,
    species: speciesReducer,
    type: pokeTypeReducer,
    animes: animesReducer,
    regions: regionsReducer
})

export default RootReducer
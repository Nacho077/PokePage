import { PokemonType, PokemonDispatchTypes, POKEMON_FAIL, POKEMON_SUCCESS, POKEMON_LOADING } from "../actionTypes"

interface DefaultStateI {
    loading: boolean,
    initial?: PokemonType[],
    pokemon?: PokemonType
}

const defaultState: DefaultStateI = {
    loading: false,
    initial: []
}

const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes): DefaultStateI => {
    switch(action.type){
        case POKEMON_FAIL:
            return{
                loading: false
            }
        case POKEMON_LOADING:
            return{
                loading: true
            }
        case POKEMON_SUCCESS:
            return{
                loading: false,
                pokemon: action.payload
            }
        default:
            return state
    }
}

export default pokemonReducer
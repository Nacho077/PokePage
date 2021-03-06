import { PokedexType, PokemonData, HomeDispatches, HOME_LOADING, HOME_SUCCESS, HOME_FAIL, HOME_PAGES, POKEDEX } from '../actionTypes'

interface DefaultStateII{
    loading: boolean,
    pokemons?: PokemonData[],
    totalPages: number,
    pokedex?: PokedexType
}

const defaultState: DefaultStateII = {
    loading: false,
    totalPages: 0
}

const homeReducer = (state: DefaultStateII = defaultState, action: HomeDispatches): DefaultStateII => {
    switch(action.type){
        case HOME_LOADING:
            return{
                ...state,
                loading: true
            }
        case HOME_SUCCESS:
            return{
                ...state,
                loading: false,
                pokemons: action.payload
            }
        case HOME_FAIL:
            return{
                loading: false,
                totalPages: 0
            }
        case HOME_PAGES:
            return{
                ...state,
                totalPages: action.payload
            }
        case POKEDEX:
            return{
                ...state,
                pokedex: action.payload
            }
        default:
            return state
    }
}

export default homeReducer;
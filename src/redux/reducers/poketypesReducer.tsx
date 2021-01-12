import {
    POKEMON_TYPES_LOADING,
    POKEMON_TYPES_SUCCESS,
    POKEMON_TYPES_FAIL,
    TYPE_SUCCESS,
    TYPE_FAIL,
    TYPE_LOADING,
    SPECIFY,
    SpecifyType,
    nameUrl,
    TypeDispatches,
    PokemonData
} from '../actionTypes'

interface DefaultStateTypes{
    loading: boolean,
    types?: nameUrl[],
    info?: SpecifyType,
    pokemons?: PokemonData[]
}

const defaultState: DefaultStateTypes = {
    loading: false
}

const pokeTypeReducer = (state:DefaultStateTypes = defaultState, action: TypeDispatches): DefaultStateTypes => {
    switch(action.type){
        case TYPE_LOADING:
            return{
                loading: true
            }
        case TYPE_SUCCESS:
            return{
                ...state,
                loading: false,
                types: action.payload
            }
        case TYPE_FAIL:
            return{
                loading: false
            }
        case SPECIFY:
            return{
                ...state,
                info: action.payload
            }
        case POKEMON_TYPES_LOADING:
            return{
                ...state,
                pokemons: []
            }
        case POKEMON_TYPES_SUCCESS:
            return{
                ...state,
                pokemons: action.payload
            }
        case POKEMON_TYPES_FAIL:
            return{
                ...state,
                pokemons: []
            }
        default:
            return state
    }
}

export default pokeTypeReducer;
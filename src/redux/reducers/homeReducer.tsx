import { PokemonType, HomeDispatches, HOME_LOADING, HOME_SUCCESS, HOME_FAIL } from '../actionTypes'

interface DefaultStateII{
    loading: boolean,
    pokemons?: PokemonType[]
}

const defaultState: DefaultStateII = {
    loading: false
}

const homeReducer = (state: DefaultStateII = defaultState, action:HomeDispatches): DefaultStateII => {
    switch(action.type){
        case HOME_LOADING:
            return{
                loading: true
            }
        case HOME_SUCCESS:
            return{
                loading: false,
                pokemons: action.payload
            }
        case HOME_FAIL:
            return{
                loading: false
            }
        default:
            return state
    }
}

export default homeReducer;
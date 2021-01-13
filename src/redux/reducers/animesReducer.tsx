import { AnimesDispatches, animesType, ANIMES_FAIL, ANIMES_LOADING, ANIMES_SUCCESS } from '../actionTypes'

interface DefaultStateAnimes{
    loading: boolean,
    animes?: animesType
}

const defaultState: DefaultStateAnimes = {
    loading: false
}

const animesReducer = (state: DefaultStateAnimes = defaultState, action: AnimesDispatches): DefaultStateAnimes => {
    switch(action.type){
        case ANIMES_FAIL:
            return{
                loading: false
            }
        case ANIMES_LOADING:
            return{
                loading: true
            }
        case ANIMES_SUCCESS:
            return{
                loading: false,
                animes: action.payload
            }
        default:
            return state
    }
}

export default animesReducer;
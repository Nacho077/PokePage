import {
    AnimesDispatches,
    animesType,
    animeInfo,
    ANIMES_FAIL,
    ANIMES_LOADING,
    ANIMES_SUCCESS,
    ANIMES_INFO
} from '../actionTypes'

interface DefaultStateAnimes{
    loading: boolean,
    animes?: animesType,
    info?: animeInfo
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
        case ANIMES_INFO:
            return{
                loading: false,
                info: action.payload
            }
        default:
            return state
    }
}

export default animesReducer;
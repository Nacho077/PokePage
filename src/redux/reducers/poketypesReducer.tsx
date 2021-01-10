import { TYPE_SUCCESS, TYPE_FAIL, TYPE_LOADING, SPECIFY, SpecifyType, nameUrl, TypeDispatches } from '../actionTypes'

interface DefaultStateTypes{
    loading: boolean,
    types?: nameUrl[],
    info?: SpecifyType
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
        default:
            return state
    }
}

export default pokeTypeReducer;
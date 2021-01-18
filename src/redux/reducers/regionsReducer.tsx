import { REG_LOADING, REG_FAIL, REG_SUCCESS, REGION_INFO, regions, region, regionDispatches } from '../actionTypes'

interface defaultStateRegions{
    loading: boolean,
    regions?: regions,
    region?: region
}

const defaultState: defaultStateRegions = {
    loading: false
}

const RegionReducer = (state: defaultStateRegions = defaultState, action: regionDispatches): defaultStateRegions => {
    switch(action.type){
        case REG_LOADING:
            return{
                loading: true
            }
        case REG_FAIL:
            return{
                loading: false
            }
        case REG_SUCCESS:
            return{
                loading: false,
                regions: action.payload
            }
        case REGION_INFO:
            return{
                ...state,
                region: action.payload
            }
        default:
            return state
    }
}

export default RegionReducer;
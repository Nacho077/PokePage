import { SpeciesDispatches, SpeciesData, SPECIES_FAIL, SPECIES_LOADING, SPECIES_SUCCESS } from '../actionTypes'

interface DefaultStateIII{
    loading: boolean,
    species?: SpeciesData
}

const defaultState: DefaultStateIII = {
    loading: false
}

const speciesReducer = (state: DefaultStateIII = defaultState, action: SpeciesDispatches): DefaultStateIII => {
    switch(action.type){
        case SPECIES_FAIL:
            return{
                loading: false
            }
        case SPECIES_LOADING:
            return{
                loading: true
            }
        case SPECIES_SUCCESS:
            return{
                loading: false,
                species: action.payload
            }
       default:
           return state
    }
}

export default speciesReducer;
import { Dispatch } from 'redux'
import axios from 'axios'
import {PokemonDispatchTypes,
    POKEMON_LOADING,
    POKEMON_FAIL,
    POKEMON_SUCCESS,
    HomeDispatches,
    HOME_SUCCESS,
    HOME_FAIL,
    HOME_LOADING
} from './actionTypes'

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try{
        dispatch({
            type: POKEMON_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({
            type: POKEMON_SUCCESS,
            payload: res.data
        })
    }catch(e){
        dispatch({
            type: POKEMON_FAIL,
            payload: null
        })
    }
}


export const UpdateHome = () => async (dispatch: Dispatch<HomeDispatches>) => {
    try{
        dispatch({
            type: HOME_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=4`)
        dispatch({
            type: HOME_SUCCESS,
            payload: res.data.results
        })
    }catch(e){
        dispatch({
            type: HOME_FAIL,
            payload: null
        })
    }
}

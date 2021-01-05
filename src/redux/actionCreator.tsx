import { Dispatch } from 'redux'
import axios from 'axios'
import {PokemonDispatchTypes,
    SpeciesDispatches,
    POKEMON_LOADING,
    POKEMON_FAIL,
    POKEMON_SUCCESS,
    HomeDispatches,
    HOME_SUCCESS,
    HOME_FAIL,
    HOME_LOADING,
    HOME_PAGES,
    SPECIES_SUCCESS,
    SPECIES_FAIL,
    SPECIES_LOADING,
    POKEDEX
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

export const startPokedex = () => async (dispatch: Dispatch<HomeDispatches>) => {
    try{
        dispatch({
            type: HOME_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=9`)
        var pokemons = []
        for(let i = 0; i < res.data.results.length; i++){
            const pok = await axios.get(res.data.results[i].url)
            pokemons.push(pok.data)
        }
        dispatch({
            type: HOME_SUCCESS,
            payload: pokemons
        })
        dispatch({
            type: HOME_PAGES,
            payload: (res.data.count) / 9
        })
    }catch(e){
        dispatch({
            type: HOME_FAIL,
            payload: null
        })
    }
}

export const changePage = (page: number) => async (dispatch: Dispatch<HomeDispatches>) => {
    try{
        var offset = (page - 1) * 9
        dispatch({
            type: HOME_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`)
        var pokemons = []
        for(let i = 0; i < res.data.results.length; i++){
            const pok = await axios.get(res.data.results[i].url)
            pokemons.push(pok.data)
        }
        dispatch({
            type: HOME_SUCCESS,
            payload: pokemons
        })
    }catch{
        dispatch({
            type: HOME_FAIL,
            payload: null
        })
    }
}

export const getSpecies = (name: string) => async (dispatch: Dispatch<SpeciesDispatches>) => {
    try{
        dispatch({
            type: SPECIES_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const species = await axios.get(res.data.species.url)
        dispatch({
            type: SPECIES_SUCCESS,
            payload: species.data
        })
    }catch{
        dispatch({
            type: SPECIES_FAIL,
            payload: null
        })
    }
}

export const getPokedex = () => async (dispatch: Dispatch<HomeDispatches>) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokedex?limit=28`)
    dispatch({
        type: POKEDEX,
        payload: res.data.results
    })
}

export const specifiPokedex = (zone: number | string) => async (dispatch: Dispatch<HomeDispatches>) => {
    try{
        dispatch({
            type: HOME_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokedex/${zone}`)
        var pokemons = []
        for(let i = 0; i < 9; i++){
            const pokeName = res.data.pokemon_entries[i].pokemon_species.name
            const pok = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            pokemons.push(pok.data)
        }
        dispatch({
            type: HOME_SUCCESS,
            payload: pokemons
        })
        dispatch({
            type: HOME_PAGES,
            payload: (res.data.pokemon_entries.length) / 9
        })
    }catch(e){
        dispatch({
            type: HOME_FAIL,
            payload: null
        })
    }
}

export const changePageZone = (page: number, zone: number | string) => async (dispatch: Dispatch<HomeDispatches>) => {
    try{
        var offset = (page - 1) * 9
        dispatch({
            type: HOME_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokedex/${zone}`)
        var pokemons = []
        for(let i = offset; i < offset + 9; i++){
            const pokeName = res.data.pokemon_entries[i].pokemon_species.name
            const pok = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            pokemons.push(pok.data)
        }
        dispatch({
            type: HOME_SUCCESS,
            payload: pokemons
        })
    }catch{
        dispatch({
            type: HOME_FAIL,
            payload: null
        })
    }
}
import { Dispatch } from 'redux'
import axios from 'axios'
import {
    nameUrl,
    PokemonDispatchTypes,
    SpeciesDispatches,
    TypeDispatches,
    AnimesDispatches,
    PokeTypeDispatches,
    regionDispatches,
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
    POKEDEX,
    TYPE_SUCCESS,
    TYPE_FAIL,
    TYPE_LOADING,
    SPECIFY,
    POKEMON_TYPES_SUCCESS,
    POKEMON_TYPES_LOADING,
    POKEMON_TYPES_FAIL,
    ANIMES_SUCCESS,
    ANIMES_LOADING,
    ANIMES_FAIL,
    ANIMES_INFO,
    REG_LOADING,
    REG_SUCCESS,
    REG_FAIL,
    REGION_INFO
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

export const SearchPokemon = (pokeName: string) => async (dispatch: Dispatch<HomeDispatches>) => {
    try{
        dispatch({
            type: HOME_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`)
        var pokemons = []
        for(let i = 0; i < res.data.varieties.length; i++){
            const pok = await axios.get(res.data.varieties[i].pokemon.url)
            pokemons.push(pok.data)
        }
        dispatch({
            type: HOME_SUCCESS,
            payload: pokemons
        })
        dispatch({
            type: HOME_PAGES,
            payload: 1
        })
    }catch(e){
        dispatch({
            type: HOME_FAIL,
            payload: null
        })
    }
}

export const getTypes = () => async (dispatch: Dispatch<TypeDispatches>) => {
    try{
        dispatch({
            type: TYPE_LOADING,
            payload: null
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/type`)
        const types = []
        for(let i = 0; i < res.data.results.length; i++){
            types.push(res.data.results[i])
        }
        dispatch({
            type: TYPE_SUCCESS,
            payload: types.filter(t => t.name !== 'shadow' && t.name !== 'unknown')
        })
    }catch{
        dispatch({
            type: TYPE_FAIL,
            payload: null
        })
    }
}

export const getSpecify = (type: string) => async (dispatch: Dispatch<TypeDispatches>) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    dispatch({
        type: SPECIFY,
        payload: res.data
    })
}

export const pokemonsType = (pok: {pokemon: nameUrl}[] | null | undefined, type: string | null) => async (dispatch: Dispatch<PokeTypeDispatches>) => {
    try{
        dispatch({
            type: POKEMON_TYPES_LOADING,
            payload: null
        })
        let call: any = false
        var pokemons = []
        if(pok === null){
            call = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        }
        for(let i = 0; i < 9; i++){
            let res = await axios.get(call ? (call?.data.pokemon[i].pokemon.url) : (pok ? pok[i].pokemon.url : ''))
            pokemons.push(res.data)
        }
        dispatch({
            type: POKEMON_TYPES_SUCCESS,
            payload: pokemons
        })
    }catch(e){
        console.log(e)
        dispatch({
            type: POKEMON_TYPES_FAIL,
            payload: null
        })
    }
}

export const getAnimes = (page: number) => async (dispatch: Dispatch<AnimesDispatches>) => {
    try{
        dispatch({
            type: ANIMES_LOADING,
            payload: null
        })
        const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=pokemon&page=${page}`)
        dispatch({
            type: ANIMES_SUCCESS,
            payload: res.data
        })
    }catch{
        dispatch({
            type: ANIMES_FAIL,
            payload: null
        })
    }
}

export const getAnimesInfo = (id: number) => async (dispatch: Dispatch<AnimesDispatches>) => {
    dispatch({
        type: ANIMES_LOADING,
        payload: null
    })
    const res = await axios.get(`https://api.jikan.moe/v3/anime/${id}`)
    dispatch({
        type: ANIMES_INFO,
        payload: res.data
    })
}

export const getRegions = () => async (dispatch: Dispatch<regionDispatches>) => {
    try{
        dispatch({
            type: REG_LOADING,
            payload: null
        })
        const res = await axios.get('https://pokeapi.co/api/v2/region')
        dispatch({
            type: REG_SUCCESS,
            payload: res.data
        })
    }catch{
        dispatch({
            type: REG_FAIL,
            payload: null
        })
    }
}

export const getRegionInfo = (id: string) => async (dispatch: Dispatch<regionDispatches>) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/region/${id}`)
    dispatch({
        type: REGION_INFO,
        payload: res.data
    })
}
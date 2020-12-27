export const POKEMON_SUCCESS: string = "POKEMON_SUCCESS"
export const POKEMON_FAIL: string = "POKEMON_FAIL"
export const POKEMON_LOADING: string = "POKEMON_LOADING"

export type PokemonData = {
    abilities: PokemonAbility[],
    id: number,
    moves: PokemonMove[],
    name: string,
    sprites: PokemonSprites,
    stats: PokemonStat[],
    types: PokemonType[]
}

export type PokemonAbility = {
    ability: {
        name: string,
        url: string
    }
}

export type PokemonMove = {
    move: {
        name: string,
        url: string
    }
}

export type PokemonSprites = {
    front_default: string,
    front_female: unknown,
    front_shiny: string,
    front_shiny_female: unknown
}

export type PokemonStat = {
    base_stat: number,
    stat: {
        name: string
    }
}

export type PokemonType = {
    type: {
        name: string
    }
}

// interface Loading / Fail
export interface PokemonLoading{
    type: typeof POKEMON_LOADING,
    payload: any
}

export interface PokemonFail{
    type: typeof POKEMON_FAIL,
    payload: any
}

// /pokemon/:name
export interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: PokemonData
}

export type PokemonDispatchTypes = PokemonSuccess | PokemonLoading | PokemonFail
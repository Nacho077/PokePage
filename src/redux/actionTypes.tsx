export const POKEMON_SUCCESS: string = "POKEMON_SUCCESS"
export const POKEMON_FAIL: string = "POKEMON_FAIL"
export const POKEMON_LOADING: string = "POKEMON_LOADING"
export const HOME_LOADING: string = "HOME_LOADING"
export const HOME_SUCCESS: string = "HOME_SUCCES"
export const HOME_FAIL: string = "HOME_FAIL"
export const HOME_PAGES: string = "HOME_PAGES"
export const SPECIES_SUCCESS: string = "SPECIES_SUCCES"
export const SPECIES_FAIL: string = "SPECIES_FAIL"
export const SPECIES_LOADING: string = "SPECIES_PAGES"
export const INFO_SUCCESS: string = "INFO_SUCCES"
export const INFO_FAIL: string = "INFO_FAIL"
export const INFO_LOADING: string = "INFO_PAGES"
export const POKEDEX: string = "POKEDEX"
export const TYPE_SUCCESS: string = "TYPE_SUCCESS"
export const TYPE_LOADING: string = "TYPE_LOADING"
export const TYPE_FAIL: string = "TYPE_FAIL"
export const SPECIFY: string = "SPECIFY"
export const POKEMON_TYPES_SUCCESS: string = "POKEMON_TYPES"
export const POKEMON_TYPES_LOADING: string = "POKEMON_TYPES_LOADING"
export const POKEMON_TYPES_FAIL: string = "POKEMON_TYPES_FAIL"
export const ANIMES_LOADING: string = "ANIMES_LOADING"
export const ANIMES_FAIL: string = "ANIMES_FAIL"
export const ANIMES_SUCCESS: string = "ANIMES_SUCCESS"
export const ANIMES_INFO: string = "ANIMES_INFO"

export type nameUrl = {
    name: string,
    url: string
}

export type PokemonData = {
    abilities: PokemonAbility[],
    id: number,
    moves: PokemonMove[],
    name: string,
    sprites: PokemonSprites,
    stats: PokemonStat[],
    types: PokemonType[],
    species: nameUrl
}

export type PokemonGames = {
    gameIndex: number,
    version: nameUrl
}

export type PokemonAbility = {
    ability: nameUrl
}

export type PokemonMove = {
    move: nameUrl
}

export type PokemonSprites = {
    [key: string]: string
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
    other: any
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

export type SpeciesData = {
    evolution_chain: {url: string},
    flavor_text_entries: PokemonFlavor[],
    genere: PokemonGenere[],
    habitat: nameUrl,
    varieties: PokemonVar[],
    pokedex_numbers: PokedexNum[]
}

export type PokedexNum = {
    entry_number: number,
    pokedex: nameUrl
}

export type PokemonVar = {
    pokemon: nameUrl
}

export type PokemonGenere = {
    genus: string,
    language: {name: string}
}

export type PokemonFlavor =  {
    flavor_text: string,
    language: {name: string},
    version: nameUrl
}

export type PokedexType = nameUrl[]

export type SpecifyType = {
    damage_relations: {
        [key: string]: nameUrl[]
        double_damage_from: nameUrl[],
        double_damage_to: nameUrl[],
        half_damage_from: nameUrl[],
        half_damage_to: nameUrl[],
        no_damage_from: nameUrl[],
        no_damage_to: nameUrl[]
    }
    pokemon: {pokemon: nameUrl}[]
}

export type animesType = {
    last_page: number,
    results: anime[]
}

export type anime = {
    mal_id: number,
    title: string,
    image_url: string,
    synopsis: string,
}

export type animeInfo = {
    image_url: string,
    title: string,
    episodes: number,
    aired: {
        prop:{
            from:date,
            to: date
        }
    },
    score: number,
    scored_by: number,
    synopsis: string,
    rank: number,
    rating: string,
    popularity: number
}

export type date = {
    day: number,
    month: number,
    year: number
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

// /pokedex
export interface HomeLoading{
    type: typeof HOME_LOADING,
    payload: any
}

export interface HomeSuccess{
    type: typeof HOME_SUCCESS,
    payload: PokemonData[]
}

export interface HomeFail{
    type: typeof HOME_FAIL,
    payload: any
}

export interface HomePages{
    type: typeof HOME_PAGES,
    payload: number
}

export interface Pokedexes{
    type: typeof POKEDEX,
    payload: PokedexType
}

export type HomeDispatches = HomeLoading | HomeSuccess | HomeFail | HomePages | Pokedexes

//for evolutions and more info in /pokemon/:name
export interface SpeciesLoading{
    type: typeof SPECIES_LOADING,
    payload: any
}

export interface SpeciesFail{
    type: typeof SPECIES_FAIL,
    payload: any
}

export interface SpeciesSuccess{
    type: typeof SPECIES_SUCCESS,
    payload: SpeciesData
}

export type SpeciesDispatches = SpeciesLoading | SpeciesFail | SpeciesSuccess

//infoPokemon

export interface InfoLoading{
    type: typeof INFO_LOADING,
    payload: any
}

export interface InfoFail{
    type: typeof INFO_FAIL,
    payload: any
}

export interface InfoSuccess{
    type: typeof INFO_SUCCESS,
    payload: PokemonData[]
}

export type InfoDispatch = InfoLoading | InfoFail | InfoFail

// /type
export interface TypeSuccess{
    type: typeof TYPE_SUCCESS,
    payload: nameUrl[]
}

export interface TypeFail{
    type: typeof TYPE_LOADING,
    payload: any
}

export interface TypeLoading{
    type: typeof TYPE_FAIL,
    payload: any
}


// /type/:selected
export interface SpecifySuccess{
    type: typeof SPECIFY,
    payload: any
}

export type TypeDispatches = TypeSuccess | TypeFail | TypeLoading

export interface pokeTypeLoading{
    type: typeof POKEMON_TYPES_LOADING,
    payload: any
}

export interface pokeTypeSuccess{
    type: typeof POKEMON_TYPES_SUCCESS,
    payload: PokemonData[]
}

export interface pokeTypeFail{
    type: typeof POKEMON_TYPES_FAIL,
    payload: any
}

export type  PokeTypeDispatches = pokeTypeLoading | pokeTypeSuccess | pokeTypeFail

// /animes
export interface animesSuccess{
    type: typeof ANIMES_SUCCESS,
    payload: animesType
}

export interface animesLoading{
    type: typeof ANIMES_LOADING,
    payload: any
}

export interface animesFail{
    type: typeof ANIMES_FAIL,
    payload: any
}

export interface infoAnime{
    type: typeof ANIMES_INFO,
    payload: animeInfo
}

export type AnimesDispatches = animesSuccess | animesLoading | animesFail
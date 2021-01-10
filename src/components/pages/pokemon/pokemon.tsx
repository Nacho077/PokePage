import React, { useEffect, useState } from 'react'
import { GetPokemon, getSpecies } from '../../../redux/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store'
import { PokemonData, SpeciesData } from '../../../redux/actionTypes'
import Navbar from '../../modules/navbar/navbar'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Table, { TableBody } from '../../modules/table/table'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import s from './pokemon.module.css'

type props = {
    match: {
        params: {
            name: string
        }
    }
}

type TableState = {
    [key: string]: state,
    variety: state,
    pokedex: state,
    entries: state
}

type state = {
    header: string[],
    body: TableBody[]
}
    
const Pokemon:React.FC<props> = (prop) => {
    const dispatch = useDispatch()
    const [mode, setMode] = useState("front") //front / back
    const pokemonName: string = prop.match.params.name
    const [tables, setTable] = useState<TableState>({
        variety: {
            header: ['varieties'],
            body: []
        },
        pokedex: {
            header: ['Pokedex', 'Number'],
            body: []
        },
        entries: {
            header: ['Version', 'Description'],
            body: []
        }
    })
    const varietie: TableBody[] = []
    const pokedexes: TableBody[] = []
    const entries: TableBody[] = []
    const loading: boolean = useSelector((state: RootStore) => state.pokemon.loading)
    const pokemon: PokemonData | undefined = useSelector((state: RootStore) => state.pokemon.pokemon)
    const species: SpeciesData | undefined = useSelector((state: RootStore) => state.species.species)
    
    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
        dispatch(getSpecies(pokemonName))
    }, [dispatch, pokemonName])

    const handleMode = () => {
        mode === "front" ? setMode("back") : setMode("front")
    }

    const handleTables = (table: string) => {
        let newState: TableState = {
            variety: {
                header: ['varieties'],
                body: []
            },
            pokedex: {
                header: ['Pokedex', 'Number'],
                body: []
            },
            entries: {
                header: ['Version', 'Description'],
                body: []
            }
        }
        newState[table].body = tables[table].body.length ? [] : asignVar(table)
        setTable(newState)
    }

    const asignVar = (name: string) => {
        switch(name){
            case 'variety':
                species?.varieties.map(vari => varietie.push({
                    link: vari.pokemon.url,
                    name: vari.pokemon.name
                }))
                return varietie
            case 'pokedex':
                species?.pokedex_numbers.map(poked => pokedexes.push({
                    name: poked.pokedex.name,
                    link: poked.pokedex.url,
                    description: poked.entry_number
                }))
                return pokedexes
            case 'entries':
                species?.flavor_text_entries.filter(entrie => entrie.language.name === 'en').map(entry => (
                    entries.push({
                        name: entry.version.name,
                        link: entry.version.url,
                        description: entry.flavor_text
                    })
                ))
                return entries
            default:
                return []
        }
    }

    return(
        <div className={s.container_main}>
            <div className={s.container_nav}>
                <Navbar/>
            </div>
            {loading ? (<div className={s.loading}>Loading</div>) : (
                pokemon ? (
                    <div className={s.container_pokemon}>
                        <h1>{pokemon.name.replace(/\b\w/g, a => a.toUpperCase())}</h1>
                        <div className={s.container_images}>
                            <div className={s.container_photos_title}>
                                <div className={s.empty}></div>
                                <div className={s.container_title}><h3>Male</h3></div>
                                <div className={s.container_title}><h3>Female</h3></div>
                                <div className={s.container_title}><h3>Default {mode}</h3></div>
                                <div className={s.container_photo}>
                                    <img src={pokemon?.sprites[`${mode}_default`]} alt={`${mode}_male`}/>
                                </div>
                                <div className={s.container_photo}>
                                    <img src={pokemon?.sprites[`${mode}_female`] || pokemon?.sprites[`${mode}_default`]} alt={`${mode}_female`}/>
                                </div>
                                <div className={s.container_title}><h3>Shiny {mode}</h3></div>
                                <div className={s.container_photo}>
                                    <img src={pokemon?.sprites[`${mode}_shiny`]} alt={`${mode}_shiny_male`}/>
                                </div>
                                <div className={s.container_photo}>
                                    <img src={pokemon?.sprites[`${mode}_shiny_female`] || pokemon?.sprites[`${mode}_shiny`]} alt={`${mode}_shiny_female`}/>
                                </div>
                            </div>
                            <div className={s.container_btn} onClick={handleMode}>
                                <RotateLeftIcon/>
                            </div>
                        </div>
                        <div className={s.container_info}>
                            {Object.keys(tables).map(info => (
                                <div className={s.container_table_title}
                                style={{
                                    gridRow: tables[info].body.length ? '2' : 'auto',
                                    gridColumn: tables[info].body.length ? '1 / 4' : 'auto'
                                }}
                                >
                                    <div className={s.title} onClick={() => handleTables(info)}>
                                        <h1>{info}</h1>
                                        <div className={s.icon} style={{transform: tables[info].body.length ? 'rotate(180deg)' : 'none'}}>
                                            <KeyboardArrowDownIcon/>
                                            </div>
                                    </div>
                                    <div
                                    className={s.container_table}
                                    style={{fontSize: tables[info].body.length ? '16px' : '0'}}>
                                        <Table
                                        headers={tables[info].header}
                                        body={tables[info].body}
                                        />
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                ) : (<div className={s.loading}>Not pokemons here</div>)
            )}
        </div>
    )
}

export default Pokemon;
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPokemon, getSpecies, loadVarieties } from '../../../redux/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store'
import { PokemonData, SpeciesData } from '../../../redux/actionTypes'
import Navbar from '../../modules/navbar/navbar'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import s from './pokemon.module.css'

type props = {
    match: {
        params: {
            name: string
        }
    }
}
    
const Pokemon:React.FC<props> = (prop) => {
    const dispatch = useDispatch()
    const [mode, setMode] = useState("front") //front / back
    const pokemonName: string = prop.match.params.name
    const loading: boolean = useSelector((state: RootStore) => state.pokemon.loading)
    const pokemon: PokemonData | undefined = useSelector((state: RootStore) => state.pokemon.pokemon)
    const species: SpeciesData | undefined = useSelector((state: RootStore) => state.species.species)
    
    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
        dispatch(getSpecies(pokemonName))
        dispatch(loadVarieties(pokemonName))
    }, [dispatch, pokemonName])
    console.log(species)

    const handleMode = () => {
        mode === "front" ? setMode("back") : setMode("front")
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
                        <div className={s.container_headers}>
                            <h5>Male</h5>
                            <h5>Female</h5>
                        </div>
                        <div className={s.container_photos}>
                            <div className={s.container_all_images}>
                                <div className={s.container_images}>
                                    <h3>Default {mode}</h3>
                                    {Object.keys(pokemon.sprites).map((sprite: string) => (
                                        <div key={sprite}>
                                            {sprite.split("_")[0] === mode && sprite.split("_")[1] !== "shiny" && 
                                            sprite.split("_")[sprite.split("_").length - 1] === "default" &&
                                                <img src={pokemon.sprites[sprite]} alt={sprite}/>}
                                            {(sprite.split("_")[0] === mode && sprite.split("_")[1] !== "shiny" && 
                                            sprite.split("_")[sprite.split("_").length - 1] === "female") &&
                                                (pokemon.sprites[sprite] === null ? (<img src={pokemon.sprites[`${mode}_default`]} alt={sprite}/>) : 
                                                (<img src={pokemon.sprites[sprite]} alt={sprite}/>))}
                                        </div>
                                    ))}
                                </div>
                                <div className={s.container_images}>
                                    <h3>Shiny {mode}</h3>
                                    {Object.keys(pokemon.sprites).map((sprite: string) => (
                                            <div key={sprite}>
                                                {sprite.split("_")[0] === mode && sprite.split("_")[1] === "shiny" && 
                                                sprite.split("_")[sprite.split("_").length - 1] === "shiny" &&
                                                    <img src={pokemon.sprites[sprite]} alt={sprite}/>}
                                                {(sprite.split("_")[0] === mode && sprite.split("_")[1] === "shiny" && 
                                                sprite.split("_")[sprite.split("_").length - 1] === "female") &&
                                                    (pokemon.sprites[sprite] === null ? (<img src={pokemon.sprites[`${mode}_shiny`]} alt={sprite}/>) : 
                                                    (<img src={pokemon.sprites[sprite]} alt={sprite}/>))}
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className={s.container_rotate} onClick={handleMode}><RotateLeftIcon/></div>
                        </div>
                        <div className={s.container_info}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Varieties</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {species ? (species.varieties.map(variety => (
                                        <tr key={variety.pokemon.name}>
                                            <td className={s.container_link}>
                                                <Link to={`/${variety.pokemon.url}`} className={s.link}>
                                                    {variety.pokemon.name}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))) : (<div className={s.loading}>Loading info...</div>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (<div className={s.loading}>Not pokemons here</div>)
            )}
        </div>
    )
}

export default Pokemon;
import React from 'react'
import { PokemonData } from '../../../redux/actionTypes'
import { Link } from 'react-router-dom'
import s from './pokeCard.module.css'

const PokeCard: React.FC<PokemonData> = (pokemon): JSX.Element => {
    return(
        <div className={s.container_main}>
            <Link to={`/pokemon/${pokemon.name}`} className={s.link}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <h1>{pokemon.name.replace(/\b\w/g, a => a.toUpperCase())}</h1>
            </Link>
        </div>
    )
}

export default PokeCard;
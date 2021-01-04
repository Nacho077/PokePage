import React from 'react'
import { PokemonData } from '../../../redux/actionTypes'
import { Link } from 'react-router-dom'
import s from './pokeCard.module.css'

const PokeCard: React.FC<PokemonData> = (pokemon): JSX.Element => {
    const img: string = "official-artwork"

    return(
        <div className={s.container_main}>
            <Link to={`/pokemon/${pokemon.name}`} className={s.link}>
                {pokemon.sprites.other[img].front_default ? (
                    <img
                    src={pokemon.sprites.other[img].front_default}
                    alt="Source not found"
                    className={s.image}
                    />
                ) : (<img
                    src={pokemon.sprites.front_default}
                    alt="Source not found"
                    />)}
                <h1>{pokemon.name.replace(/\b\w/g, a => a.toUpperCase())}</h1>
            </Link>
        </div>
    )
}

export default PokeCard;
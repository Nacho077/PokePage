import React from 'react'
import { anime } from '../../../redux/actionTypes'
import s from './animeCard.module.css'

type AnimeProps = {
    anime: anime
}

const AnimesCard: React.FC<AnimeProps> = ({anime}): JSX.Element => {
    return(
        <div className={s.container_all}>
            <div className={s.container_image}>
                <img src={anime.image_url} alt='Not found'/>
            </div>
            <div className={s.container_info}>
                <h1>{anime.title}</h1>
                <p>{anime.synopsis}</p>
            </div>
        </div>
    )
}

export default AnimesCard;
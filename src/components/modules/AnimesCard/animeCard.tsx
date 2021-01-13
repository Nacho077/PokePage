import React from 'react'
import { anime } from '../../../redux/actionTypes'
import { Link } from 'react-router-dom'
import s from './animeCard.module.css'

type AnimeProps = {
    anime: anime
}

const AnimesCard: React.FC<AnimeProps> = ({anime}): JSX.Element => {
    return(
        <div className={s.container_all}>
            <div
            className={s.container_main}
            style={{backgroundImage: `url(${anime.image_url})`}}
            />
            <div className={s.container_info}>
                <div className={s.info}>
                    <h1>{anime.title}</h1>
                    <p>{anime.synopsis}</p>
                </div>
                <Link to={`/anime/${anime.mal_id}`}>See more info</Link>
            </div>
        </div>
    )
}

export default AnimesCard;
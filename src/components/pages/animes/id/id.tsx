import React, { useEffect } from 'react'
import { getAnimesInfo } from '../../../../redux/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../../store'
import Navbar from '../../../modules/navbar/navbar'
import s from './id.module.css'

type infoProps = {
    id: number
}

const InfoAnimes: React.FC<infoProps> = ({id}):JSX.Element => {
    const dispatch = useDispatch()
    const anime = useSelector((state: RootStore) => state.animes)
    useEffect(() => {
        dispatch(getAnimesInfo(id))
    }, [dispatch, id])
    console.log(anime)

    return(
        <>
            <div className={s.container_navbar}><Navbar/></div>
            {anime.info ? (
                <div className={s.container_main}>
                    <img src={anime.info.image_url} alt=""/>
                    <div className={s.container_info}>
                        <h1 id={s.title}>{anime.info.title}</h1>
                        <div className={s.score}>
                            <span>Score: {anime.info.score}</span>
                            <span className={s.scored_by}>Scored by: {anime.info.scored_by}</span>
                        </div>
                        <div className={s.extras}>
                            <span><em>Rank</em> #{anime.info.rank}</span>
                            <span><em>Popularity</em> #{anime.info.popularity}</span>
                            <span><em>Rating:</em> {anime.info.rating}</span>
                        </div>
                        <div className={s.synopsis}>
                            {anime.info.synopsis}
                        </div>
                    </div>
                </div>
            ) : (<div className="loading">Loading...</div>)}
        </>
    )
}

export default InfoAnimes
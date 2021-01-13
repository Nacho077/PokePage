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
            {anime.loading && <div className="loading">Loading..</div>}
            {
                anime.info ? (
                    <div className={s.container}>
                        <img src={anime.info.image_url} alt="source not found"/>
                        <div className={s.info}>
                            <h1>{anime.info.title}</h1>
                            <p>{anime.info.synopsis}</p>
                            <div className={s.date}>
                                <span>Start of broadcast: {Object.values(anime.info.aired.prop.from).join(" / ")}</span>
                                {anime.info.aired.prop.to.day &&
                                    <span>End of broadcast: {Object.values(anime.info.aired.prop.to).join(" / ")}</span>}
                            </div>
                        </div>
                    </div>
                ) : (<></>)
            }
        </>
    )
}

export default InfoAnimes
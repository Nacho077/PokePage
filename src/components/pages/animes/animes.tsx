import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store' 
import { getAnimes } from '../../../redux/actionCreator'
import Banner from '../../modules/banner/banner'
import AnimeCard from '../../modules/AnimesCard/animeCard'
import background from './background.jpeg'
import s from './animes.module.css'

const Animes: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const animes = useSelector((state: RootStore) => state.animes)
    useEffect(() => {
        dispatch(getAnimes(1))
    }, [dispatch])

    return(
        <>
            <Banner
            width='100%'
            height='50vh'
            title='Animes and Movies'
            background={`url(${background})`}
            nav={true}
            top='10vh'
            />
            {animes.loading && 
                <div className="loading">Loading...</div>
            }
            <div className={s.container_animes}>
                {animes.animes?.results.map(anime => (
                    <div key={anime.mal_id}>
                        <AnimeCard anime={anime}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Animes;
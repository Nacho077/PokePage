import React, { useEffect } from 'react'
import { UpdateHome } from '../../../redux/actionCreator'
import { useDispatch } from 'react-redux'
import fondo from './background.jpeg'
import s from './home.module.css'

const Home: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UpdateHome())
    }, [dispatch])

    return(
        <div style={{backgroundImage: `url(${fondo})`}} className={s.container_main}>
            <div className={s.container_title}>
                <h1 className={s.title}>
                    Todo sobre tus pokemons favoritos
                </h1>
            </div>
        </div>
    )
}

export default Home;
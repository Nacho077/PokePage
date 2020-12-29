import React, { useEffect } from 'react'
import { UpdateHome } from '../../../redux/actionCreator'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Banner from '../../modules/banner/banner'
import fondo from './background.jpeg'
import s from './opening.module.css'

const Opening: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UpdateHome())
    }, [dispatch])
    return(
        <div className={s.container}>
            <Link to="/home">
                <Banner
                width='100%'
                height='100vh'
                title='All about your favorite Pokemons'
                pokeball={true}
                background={`url(${fondo})`}
                />
            </Link>
        </div>
    )
}

export default Opening;
import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../modules/banner/banner'
import fondo from './background.jpeg'
import s from './opening.module.css'

const Opening: React.FC = (): JSX.Element => {
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
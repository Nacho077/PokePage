import React from 'react'
import s from './pokeball.module.css'

const Pokeball: React.FC = ():JSX.Element => {
    return(
        <div className={s.center_on_page}>
            <div className={s.pokeball}>
                <div className={s.pokeball__button}></div>
            </div>
        </div>
    )
}

export default Pokeball;
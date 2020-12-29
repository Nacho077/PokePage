import React from 'react'
import Pokeball from '../pokeball/pokeball'
import s from './banner.module.css'

type bannerProps = {
    width: string,
    height: string,
    title: string,
    pokeball?: boolean,
    background: string,
    top?: string
}

const Banner: React.FC<bannerProps> = ({width, height, title, pokeball, background, top}): JSX.Element => {
    return(
        <div style={{backgroundImage: background, width: width, height: height}} className={s.container_main}>
            <div className={s.container_title} style={{marginTop: top}}>
                <h1 className={s.title}>
                    {title}
                </h1>
                <div className={s.container_pokeball}>
                    {pokeball && <Pokeball/>}
                </div>
            </div>
        </div>
    )
}

export default Banner;
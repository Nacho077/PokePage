import React from 'react'
import { gymType } from '../gym'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import s from './card.module.css'

type propsCard = {
    gym: gymType
}

const Card: React.FC<propsCard> = ({gym}): JSX.Element => {
    return(
        <div className={s.container_main}>
            <h1 style={{color: gym.color}} className={s.title}>{gym.title}</h1>
            <img src={gym.img} alt=""/>
            <p className={s.subtitle}>{gym.subtitle}</p>
            <div className={s.container_quotes}>
                <div className={`${s.quote} ${s.first}`}>
                    <FormatQuoteIcon style={{fontSize: 70}}/>
                </div>
                <p className={s.text}>{gym.quote}</p>
                <div className={`${s.quote} ${s.last}`}>
                    <FormatQuoteIcon style={{fontSize: 70}}/>
                </div>
            </div>
            <p className={`${s.subtitle} ${s.no_margin}`}>{gym.description}</p>
        </div>
    )
}

export default Card;
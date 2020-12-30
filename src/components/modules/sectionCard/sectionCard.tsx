import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import s from './sectionCard.module.css'

type sectionCardProps = {
    img: string,
    title: string,
    subtitle: string,
    to: string
}

const SectionCard: React.FC<sectionCardProps> = ({img, title, subtitle, to}):JSX.Element => {
    return(
        <div className={s.container_main}>
            <Link to={to}>
                <div className={s.container_img}>
                    <Avatar alt={title} src={img}/>
                </div>
                <div className={s.container_info}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </Link>
        </div>
    )
}

export default SectionCard
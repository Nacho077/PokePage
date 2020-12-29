import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import s from './sectionCard.module.css'

type sectionCardProps = {
    img: string,
    title: string,
    subtitle: string
}

const SectionCard: React.FC<sectionCardProps> = ({img, title, subtitle}):JSX.Element => {
    return(
        <div className={s.container_main}>
            <div className={s.container_img}>
                <Avatar alt={title} src={img}/>
            </div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default SectionCard
import React from 'react'
import background from './background.jpeg'
import Banner from '../../modules/banner/banner'
import SectionCard from '../../modules/sectionCard/sectionCard'
import elements from './elem.jpeg'
import gims from './gims.png'
import regions from './regiones.png'
import s from './home.module.css'

type sectionsType = {
    img: string,
    title: string,
    subtitle: string,
    to: string
}

const Home: React.FC = ():JSX.Element => {
    const sections: sectionsType[] = [
        {
            img: elements,
            title: 'Pokemons types',
            subtitle: 'discover the element of your favorite pokemon.',
            to: "/types"
        },
        {
            img: gims,
            title: 'Have you already discovered your ideal gym?',
            subtitle: "If you haven't done it yet, enter here and find out which one goes with your personality.",
            to: "/gym"
        },
        {
            img: regions,
            title: "Regions",
            subtitle: 'Know all the regions and the Pokémon that compose it with just one click.',
            to: "/regions"
        }
    ]

    return(
        <div className={s.container_main}>
            <div>
                <Banner
                width='100%'
                height='60vh'
                title='Home'
                background={`url(${background})`}
                top='12vh'
                nav={true}
                />
            </div>
            <div className={s.container_sections}>
                {sections.map(section => {
                    return (
                    <div className={s.section} key={section.title}>
                        <SectionCard
                        img={section.img}
                        title={section.title}
                        subtitle={section.subtitle}
                        to={section.to}
                        />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Home;
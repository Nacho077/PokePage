import React from 'react'
import background from './background.jpeg'
import Banner from '../../modules/banner/banner'
import SectionCard from '../../modules/sectionCard/sectionCard'
import elements from './elem.jpeg'
import abilities from './abilities.jpeg'
import gims from './gims.png'
import regions from './regiones.png'
import s from './home.module.css'

const Home: React.FC = ():JSX.Element => {
    const sections = [
        {
            img: elements,
            title: 'Pokemons types',
            subtitle: 'discover the element of your favorite pokemon.'
        },
        {
            img: abilities,
            title: 'Abilities',
            subtitle: 'Did you know that two fire Pokémon can have different abilities? Get to know them more here.'
        },
        {
            img: gims,
            title: 'Have you already discovered your ideal gym?',
            subtitle: "If you haven't done it yet, enter here and find out which one goes with your personality."
        },
        {
            img: regions,
            title: "Regions",
            subtitle: 'Know all the regions and the Pokémon that compose it with just one click.'
        }
    ]

    return(
        <div className={s.container_main}>
            <div>
                <Banner
                width='100%'
                height='50vh'
                title='Home'
                background={`url(${background})`}
                top='15vh'
                />
            </div>
            <div className={s.container_sections}>
                {sections.map(section => {
                    return <SectionCard img={section.img} title={section.title} subtitle={section.subtitle}/>
                })}
            </div>
        </div>
    )
}

export default Home;
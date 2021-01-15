import React from 'react'
import Card from './card/card'
import Banner from '../../modules/banner/banner'
import background from './background.png'
import instinct from './Instinct.jpeg'
import mystic from './mystic.jpeg'
import valor from './valor.png'
import s from './gym.module.css'

export type gymType = {
    title: string,
    color: string,
    img: string,
    subtitle: string,
    quote: string,
    description: string
}

const Gym: React.FC = ():JSX.Element => {
    const gyms: gymType[]  = [
        {
            title: "Team Instinct - Zapdos",
            color: "#f2d400",
            img: instinct,
            subtitle: "It's led by a guy named Spark. This is what it says:",
            quote: "Pokémon are creatures of excellent intuition. I bet her secret has to do with how her eggs hatch. Join my team. You never lose when you trust your instincts!",
            description: 'The yellow team symbolizes the ability of each trainer to understand and enhance the innate abilities of their Pokémon. The watchword is "trust yourself." Choosing Pokémon by species can be a good way to evolve on this team.'
        },
        {
            title: "Team Mystic - Articuno",
            color: "#0e60c6",
            img: mystic,
            subtitle: "Team Mystic is led by Blanche, and this is what he says:",
            quote: "The wisdom of Pokémon is exceptionally deep. I am investigating why they evolve. My team? With our calm analysis of each situation, we cannot lose!",
            description: "Calm, patience and evolution are its virtues. If the player likes to hatch eggs, see how their Pokémon evolve, and learn about their main characteristics, this is a good option.",
        },
        {
            title: "Team Valor - Moltres",
            color: "#bb4849",
            img: valor,
            subtitle: "Led by Candela, Team Valor is apparently focused on the strength of the Pokémon:",
            quote: "Pokémon are stronger than humans, and nobler at heart, too! I'm researching ways to enhance the natural power of Pokémon to find their true strength. There is no doubt that the Pokémon our team has trained are the strongest in battle!",
            description: "This team seeks to create strong and brave Pokémon to win every fight. To do this, you must know its strengths and exploit them. His values are energy and passion and his watchword: to be the best you have to work hard every day.",
        }
    ]

    return(
        <>
            <Banner
            width='100%'
            height='50vh'
            title='Gyms'
            background={`url(${background})`}
            nav={true}
            top='5vh'
            />
            <div className={s.container_main}>
                <h1>Pokemon Go Teams: Valor, Mystic and Instinct</h1>
                <p>When your character reaches level 5 and approaches a gym,
                    you will have a choice of a team. You will be introduced to the three leaders of each,
                    who have their own personal philosophy about Pokémon.</p>
                <div className={s.container_teams}>
                    {gyms.map(gym => <div key={gym.title}><Card gym={gym}/></div>)}
                </div>
            </div>
        </>
    )
}

export default Gym;
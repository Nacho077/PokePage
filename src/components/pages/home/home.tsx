import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../../../store'

const Home: React.FC = () => {
    const [thisPokemon, setPokemon] = useState<string>("")
    const pokemon = useSelector((state: RootStore) => state.pokemon)
    useEffect(() => {
        console.log(pokemon)
    }, [pokemon])
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Home;
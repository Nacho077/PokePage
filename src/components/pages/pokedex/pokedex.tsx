import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startPokedex, changePage } from '../../../redux/actionCreator'
import { RootStore } from '../../../store'
import Banner from '../../modules/banner/banner'
import PokeCard from '../../modules/pokeCard/pokeCard'
import background from './background.jpeg'
import Pages from '../../modules/pages/pages'
import s from './pokedex.module.css'


const Pokedex: React.FC = (): JSX.Element => {
    const [pages, setPages] = useState<number>(1)
    const pokedex = useSelector((state: RootStore) => state.pokedex)
    const dispatch = useDispatch()
    useEffect(() => {
        if(pages === 1) dispatch(startPokedex())
    }, [dispatch, pages])

    const changePages = (num: number) => {
        setPages(num)
        dispatch(changePage(num))
    }

    return(
        <div className={s.container_main}>
            <div className={s.container_banner}>
                <Banner
                width='100%'
                height='70vh'
                title='Pokedex'
                background={`url(${background})`}
                top='15vh'
                nav={true}
                />
            </div>
            <div>
                {pokedex.loading ? (<div className={s.loading}>Loading...</div>) : (
                    pokedex.pokemons ? (<div className={s.container_pokedex}>{
                        pokedex.pokemons.map(pokemon => (
                            <div className={s.container_pokemon} key={pokemon.name}>
                                <PokeCard
                                abilities={pokemon.abilities}
                                id={pokemon.id}
                                moves={pokemon.moves}
                                name={pokemon.name}
                                sprites={pokemon.sprites}
                                stats={pokemon.stats}
                                types={pokemon.types}
                                species={pokemon.species}
                                />
                            </div>
                        ))
                        }</div>) : (<div className={s.loading}>No pokemons here</div>)
                )}
            </div>
            <Pages
            thisPage={pages}
            lastPage={pokedex.totalPages}
            changePage={changePages}
            />
        </div>
    )
} 

export default Pokedex;
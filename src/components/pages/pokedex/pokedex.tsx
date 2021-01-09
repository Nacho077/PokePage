import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    startPokedex,
    changePage,
    getPokedex,
    specifiPokedex,
    changePageZone,
    SearchPokemon
} from '../../../redux/actionCreator'
import { RootStore } from '../../../store'
import { Link } from 'react-router-dom'
import Banner from '../../modules/banner/banner'
import PokeCard from '../../modules/pokeCard/pokeCard'
import background from './background.jpeg'
import Pages from '../../modules/pages/pages'
import SearchIcon from '@material-ui/icons/Search'
import s from './pokedex.module.css'

type pokedexType = {
    zone?: string | number
}

const Pokedex: React.FC<pokedexType> = ({zone}): JSX.Element => {
    const [input, setInput] = useState<string>("")
    const [menu, setMenu] = useState<boolean>(false)
    const [pages, setPages] = useState<number>(1)
    const pokedex = useSelector((state: RootStore) => state.pokedex)
    const dispatch = useDispatch()
    useEffect(() => {
        zone ? dispatch(specifiPokedex(zone)) :  pages === 1 ? dispatch(startPokedex()) : setMenu(false)
        !pokedex.pokedex && dispatch(getPokedex())
    }, [dispatch, pages, zone])

    const changePages = (num: number) => {
        setPages(num)
        zone ? dispatch(changePageZone(num, zone)) : dispatch(changePage(num))
    }

    const noRep: string[] = [
        'national',
        'extended-sinnoh',
        'conquest-gallery',
        'kalos-central',
        'kalos-coastal',
        'kalos-mountain',
        'galar',
        'isle-of-armor',
        'crown-tundra'
    ]

    const handleMenu = () => {
        setMenu(!menu)
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
            <div className={s.container_menu_pokedexes}>
                <h1 className={s.menu_pokedex} onClick={handleMenu}>See Pokedexes</h1>
                <div className={s.container_pokedexes_menu}>
                {pokedex.pokedex?.filter(pokedex => (
                    pokedex.name.split("-")[0] === 'updated' || noRep.includes(pokedex.name)
                )).map(pokedex => (
                    <Link to={`/${pokedex.url.slice(26)}`} style={{display: menu ? 'unset' : 'none'}} key={pokedex.name}>
                        <div className={s.pokedex}>
                            {pokedex.name.split("-")[0] === 'updated' ? 
                                pokedex.name.split("-")[1].replace(/\b\w/g, a => a.toUpperCase()) :
                                pokedex.name.split("-").join(" ").replace(/\b\w/g, a => a.toUpperCase())}
                        </div>
                    </Link>
                ))}
            </div>
            </div>
            <div className={s.container_pokedexes}>
                {pokedex.pokedex?.filter(pokedex => (
                    pokedex.name.split("-")[0] === 'updated' || noRep.includes(pokedex.name)
                )).map(pokedex => (
                    <Link to={`/${pokedex.url.slice(26)}`}  key={pokedex.name}>
                        <div className={s.pokedex}>
                            {pokedex.name.split("-")[0] === 'updated' ? 
                                pokedex.name.split("-")[1].replace(/\b\w/g, a => a.toUpperCase()) :
                                pokedex.name.split("-").join(" ").replace(/\b\w/g, a => a.toUpperCase())}
                        </div>
                    </Link>
                ))}
            </div>
            <div className={s.container_input}>
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search a Pokemon"
                />
                <div
                className={s.container_icon}
                onClick={() => dispatch(SearchPokemon(input))}
                ><SearchIcon/></div>
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
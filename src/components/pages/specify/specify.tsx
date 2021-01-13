import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store'
import { getSpecify, pokemonsType } from '../../../redux/actionCreator'
import PokeCard from '../../modules/pokeCard/pokeCard'
import Pages from '../../modules/pages/pages'
import s from './specify.module.css'

type SpecifyProps = {
    selected: string
}

const Specify: React.FC<SpecifyProps> = ({selected}): JSX.Element => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch() 
    const info = useSelector((state: RootStore) => state.type.info)
    const types = useSelector((state: RootStore) => state.type.types)
    const pokemons = useSelector((state: RootStore) => state.type.pokemons)
    useEffect(() => {
        dispatch(getSpecify(selected))
        dispatch(pokemonsType(null, selected))
    }, [dispatch, selected])

    const resultTable = (pokeType: string, relation: string) => {
        const damages: string [] = Object.keys(info ? info.damage_relations : {})
        for(let i = 0; i < damages.length; i++){
            let dam = `${damages[i].split("_").slice(0, 2).join("_")}_${relation}`
            let res = info?.damage_relations[dam].map(rel => rel.name === pokeType).includes(true)
            if(res) return asignTable(dam)
        }
        return 'X1'
    }

    const asignTable = (relation: string) => {
        let rel = relation.split("_")[0]
        let objetive = relation.split("_")[relation.split("_").length] === 'to' ? 'caused' : 'received'
        if(rel === 'double') return 'X2'
        else if(rel === 'half') return '1/2'
        else if(rel === 'no') return `No damage ${objetive}`
    }

    const handlePage = (num: number) => {
        dispatch(pokemonsType(info?.pokemon.slice((num - 1) * 9, num * 9), null))
        setPage(num)
    }

    return(
        <>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Caused damage</th>
                        <th>Damage received</th>
                    </tr>
                </thead>
                <tbody>
                    {types?.map(type => (
                        <tr key={type.name}>
                            <td>{type.name}</td>
                            <td>{resultTable(type.name, 'to')}</td>
                            <td>{resultTable(type.name, 'from')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={s.container_pokemons}>
                {pokemons?.length ? (
                    pokemons.map(poke => (
                        <div className={s.pokemon} key={poke.name}>
                            <PokeCard
                            abilities={poke.abilities}
                            id={poke.id}
                            moves={poke.moves}
                            name={poke.name}
                            sprites={poke.sprites}
                            stats={poke.stats}
                            types={poke.types}
                            species={poke.species}
                            />
                        </div>
                    ))
                    ) : <div className="loading">Loading...</div>}
            </div>
            <div>
                <Pages
                thisPage={page}
                lastPage={info ? info.pokemon.length / 9 : 1}
                changePage={handlePage}
                />
            </div>
        </>
    )
}

export default Specify
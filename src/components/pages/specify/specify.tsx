import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store'
import { getSpecify } from '../../../redux/actionCreator'
import PokeCard from '../../modules/pokeCard/pokeCard'
import Pages from '../../modules/pages/pages'
import s from './specify.module.css'

type SpecifyProps = {
    selected: string
}

const Specify: React.FC<SpecifyProps> = ({selected}): JSX.Element => {
    const dispatch = useDispatch() 
    const info = useSelector((state: RootStore) => state.type.info)
    const types = useSelector((state: RootStore) => state.type.types)
    useEffect(() => {
        dispatch(getSpecify(selected))
    }, [dispatch, selected])
    console.log(info)
    console.log(types)

    const resultTable = (pokeType: string, relation: string) => {
        const damages: string [] = Object.keys(info ? info.damage_relations : {})
        for(let i = 0; i < damages.length; i++){
            let dam = `${damages[i].split("_").slice(0, 2).join("_")}_${relation}`
            let res = info?.damage_relations[dam].map(rel => rel.name === pokeType).includes(true)
            if(res) return asignTable(dam)
        }
    }

    const asignTable = (relation: string) => {
        let rel = relation.split("_")[0]
        let objetive = relation.split("_")[relation.split("_").length] === 'to' ? 'caused' : 'received'
        if(rel === 'double') return 'X2'
        if(rel === 'half') return '1/2'
        if(rel === 'no') return `No damage ${objetive}`
    }

    return(
        <>
            <button onClick={() => resultTable('grass', 'to')}/>
            <h1>{selected.replace(/\b\w/g, a => a.toUpperCase())}</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {/* {info ? Object.keys(info.damage_relations).map(relation => relation.replace(/\b\w/g, a => a.toUpperCase()).split("_").join(" ")).map(relation => (
                            <th>{relation}</th>
                        )) : null} */}
                        <th>Damage dealer</th>
                        <th>Damege received</th>
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
                        {info?.pokemon.slice(0, 10).map(poke => (
                            <div className={s.pokemon}>
                                hi
                            </div>
                        ))}
            </div>
        </>
    )
}

export default Specify
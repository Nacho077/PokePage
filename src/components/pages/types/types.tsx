import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes } from '../../../redux/actionCreator'
import { RootStore } from '../../../store'
import { Link } from 'react-router-dom'
import Banner from '../../modules/banner/banner'
import Specify from '../specify/specify'
import background from './index.jpeg'
import s from './types.module.css'

type PropsType = {
    selected: string
}

const Types: React.FC<PropsType> = ({selected}):JSX.Element => {
    const dispatch = useDispatch()
    const types = useSelector((state: RootStore) => state.type)
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])
    
    return(
        <>
            <Banner
            width='100%'
            height='40vh'
            title='Types of Pokemon'
            background={`url(${background})`}
            nav={true}
            top='2vh'
            />
            <div className={s.container_types}>
                {types.types?.map(type => (
                    <div className={`${s[type.name]} ${s.btn}`} key={type.name}>
                        <Link to={`/type/${type.name}`}>
                            {type.name.replace(/\b\w/g, a => a.toUpperCase())}
                        </Link>
                    </div>
                ))}
            </div>
            {selected && (
            <div>
                <h1 className={`${s[selected]} ${s.title}`}>{selected.replace(/\b\w/g, a => a.toUpperCase())}</h1>
                <Specify selected={selected}/>
            </div>
            )}
        </>)
}

export default Types;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store'
import { getSpecify } from '../../../redux/actionCreator'

type SpecifyProps = {
    selected: string
}

const Specify: React.FC<SpecifyProps> = ({selected}): JSX.Element => {
    const dispatch = useDispatch()
    const info = useSelector((state: RootStore) => state.type.info)
    useEffect(() => {
        dispatch(getSpecify(selected))
    }, [dispatch, selected])
    console.log(info)

    return(
        <h1>{selected.replace(/\b\w/g, a => a.toUpperCase())}</h1>
    )
}

export default Specify
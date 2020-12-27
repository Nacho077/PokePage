import React, { useState } from 'react'
import { useDispatch }from 'react-redux'
import { GetPokemon } from '../../../redux/actionCreator'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import s from './navbar.module.css'

const Navbar: React.FC = (): JSX.Element => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleChange = (value: string) => {
        setInput(value)
    }
    const handleSearch = () => {
        dispatch(GetPokemon(input))
    }

    return(
        <nav className={s.container_main}>
            <div className={s.container_searchbar}>
                <input
                type="text"
                className="form-control"
                placeholder="Search a Pokemon"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                />
                <div onClick={handleSearch}>
                    <Link to={`/pokemon/${input}`} className={s.link}>
                        <SearchIcon/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
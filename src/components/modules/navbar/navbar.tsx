import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import s from './navbar.module.css'

const Navbar: React.FC = (): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false)

    const handleMenu = () => {
        setMenu(!menu)
    }
   /*  const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleChange = (value: string) => {
        setInput(value)
    }
    const handleSearch = () => {
        dispatch(GetPokemon(input))
    } */

    return(
        <nav className={s.container_main}>
            <div className={s.nav}>
                <div className={s.container_title}>
                    <Link to="/"><h1 className={s.title}>PokePage</h1></Link>
                </div>
                <div className={s.container_nav}>
                    <Link to="/"><h3>Home</h3></Link><h3>/</h3>
                    <Link to="/"><h3>Pokedex</h3></Link><h3>/</h3>
                    <Link to="/"><h3>Games</h3></Link><h3>/</h3>
                    <Link to="/"><h3>Animes</h3></Link>
                </div>
            </div>
            <div className={s.hamburguer} onClick={handleMenu}>
                <MenuIcon/>
            </div>
            <div className={s.nav_menu} style={{marginLeft: menu ? '0' : '-100%'}}>
                <div className={s.container_menu_title}>
                    <Link to="/"><h1 className={s.title}>PokePage</h1></Link>
                </div>
                <div className={s.container_close} onClick={handleMenu}>
                    <CloseIcon/>
                </div>
                <div className={s.container_menu_nav}>
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/"><h3>Pokedex</h3></Link>
                    <Link to="/"><h3>Games</h3></Link>
                    <Link to="/"><h3>Animes</h3></Link>
                </div>
            </div>
            {/* <div className={s.container_searchbar}>
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
            </div> */}
        </nav>
    )
}

export default Navbar;
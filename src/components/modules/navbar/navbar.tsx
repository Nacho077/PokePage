import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import s from './navbar.module.css'

type LinkType = {
    title: string,
    to: string
}

const Navbar: React.FC = (): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false)

    const handleMenu = () => {
        setMenu(!menu)
    }
    const links: LinkType[] = [
        {
            title: "Home",
            to: "/"
        },
        {
            title: "Pokedex",
            to: "/pokedex"
        },
        {
            title: "Games",
            to: "/"
        },
        {
            title: "Anime",
            to: "/"
        }
    ]

    return(
        <nav className={s.container_main}>
            <div className={s.nav}>
                <div className={s.container_title}>
                    <Link to="/"><h1 className={s.title}>PokePage</h1></Link>
                </div>
                <div className={s.container_nav}>
                    {links.map(page => (
                        <Link to={page.to} key={page.title}><h3>{page.title}</h3></Link>
                    ))}
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
                    {links.map(page => (
                        <Link to={page.to} key={page.title}><h3>{page.title}</h3></Link>
                    ))}
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
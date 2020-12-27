import React, { useState } from 'react'
import { useDispatch }from 'react-redux'
import { GetPokemon } from '../../../redux/actionCreator'

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
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Search a Pokemon"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                            />
                        </div>
                        <button
                        type="submit"
                        className="btn btn-default"
                        onClick={handleSearch}
                        >Submit</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
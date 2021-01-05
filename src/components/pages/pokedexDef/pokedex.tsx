import React from 'react'

type prop = {
    match: {
        params: {
            name: string
        }
    }
}

const PokedexDef: React.FC<prop> = (prop): JSX.Element => {
    return(
        <h1>{prop.match.params.name}</h1>
    )
}

export default PokedexDef;
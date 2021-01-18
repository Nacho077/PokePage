import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store'
import { getRegions, getRegionInfo, getPokedex } from '../../../redux/actionCreator'
import { Link } from 'react-router-dom'
import Banner from '../../modules/banner/banner'
import backphoto from './regiones.png'
import s from './regions.module.css'

type props = {
    name: string
}

const Regions: React.FC<props> = ({name}):JSX.Element => {
    const dispatch = useDispatch()
    const regions = useSelector((state: RootStore) => state.regions)
    const specials = [
        'kalos-central',
        'kalos-coastal',
        'kalos-mountain',
        'galar',
        'isle-of-armor',
        'crown-tundra'
    ]
    useEffect(() => {
        dispatch(getRegions())
        if(name){
            dispatch(getRegionInfo(name))
            dispatch(getPokedex())
        }
    }, [dispatch, name])

    return(
        <>  
            <Banner
            width='100%'
            height='50vh'
            title={regions.region?.name.replace(/\b\w/g, a => a.toUpperCase()) || 'Regions'}
            background={`url(${backphoto})`}
            nav={true}
            top='5vh'
            />
            {regions.loading && <div className="loading">Loading..</div>}
            <div className={s.container_regions}>
                {regions.regions?.results.map(reg => (
                    <Link to={`/${reg.url.slice(26)}`} key={reg.name}>
                        <div className={s.region}>
                            {reg.name.replace(/\b\w/g, a => a.toUpperCase())}
                        </div>
                    </Link>
                ))}
            </div>
            {!name && <p className={s.text}>Regions are areas in the Pokémon universe 
                that are smaller parts of a nation. 
                Each region has their own Pokémon Professor, 
                who provides a unique set of Starter Pokémon for young Trainers. 
                Each region also has a unique set of eight Gym Leaders, along with the 
                regional Elite Four. In some cases, regions can share Elite Four divisions, 
                such as Johto and Kanto.</p>} 
            {regions.region ? (
                <div className={s.container_main}>
                    <h1>{regions.region.name.replace(/\b\w/g, a => a.toUpperCase())}</h1>
                    <div className={s.container_tables}>
                        <div className={s.table}>
                            <h2>Pokedex in {regions.region.name}</h2>
                            {regions.region.pokedexes.filter(dex => dex.name.split("-")[0] === 'updated' || 
                            dex.name.split("-")[0] === 'extended' || 
                            specials.includes(dex.name)
                            ).map(dex => (
                                <Link to={`/${dex.url.slice(26)}`} key={dex.name}>
                                    <div className={s.dex}>
                                        {specials.includes(dex.name) ? 
                                        dex.name.split("-").join(" ").replace(/\b\w/g, a => a.toUpperCase()) :
                                        dex.name.split("-")[1].replace(/\b\w/g, a => a.toUpperCase())
                                        }
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className={s.table}>
                            <h2>{regions.region.name.replace(/\b\w/g, a => a.toUpperCase())}-based versions</h2>
                            {regions.region.version_groups.map(version => (
                                <div className={s.dex} key={version.name}>
                                    {version.name.replace(/\b\w/g, a=> a.toUpperCase())}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default Regions;
import React, { useState } from 'react'
import s from './pages.module.css'

type pageType = {
    thisPage: number,
    lastPage: number,
    changePage: any
}

type statePage = {
    thisPage: number,
    seePages: number[]
}

const Pages: React.FC<pageType> = ({thisPage, lastPage, changePage}): JSX.Element => {
    const [pages, setpages] = useState<statePage>({
        thisPage: thisPage,
        seePages: [1, 2, 3, 4, 5]
    })

    const handlePages = (event: React.MouseEvent) => {
        var num: number = Number(event.currentTarget.attributes[0].value)
        var newSeePages: number[] = []
        for(var i = num - 4; i <= num; i++){
            if(i % 5 === 0){
                if(i === 0) newSeePages = [i+1, i+2, i+3, i+4, i+5]
                else newSeePages = [i-1, i, i+1, i+2, i+3, i+4, i+5]
            }
        }
        var index = newSeePages.indexOf(Math.ceil(lastPage))
        if(index !== -1){
            index = Math.ceil(lastPage)
            newSeePages = [index-6, index-5, index-4, index-3, index-2, index-1, index]
        }
        setpages({
            thisPage: num,
            seePages: newSeePages
        })
        changePage(num)
    }

    return(
        <div className={s.container_pages}>
                {!pages.seePages.includes(1) && <button value={1} onClick={handlePages} className={s.btn}>1</button>}
                {!pages.seePages.includes(1) && <button className={s.empty}>...</button>}
                {pages.seePages.map(page => (
                    <button
                    value={Number(page)}
                    onClick={handlePages}
                    key={page}
                    className={Number(pages.thisPage) === Number(page) ? s.active : s.btn}>{page}</button>
                ))}
                {!pages.seePages.includes(Math.ceil(lastPage)) && <button className={s.empty}>...</button>}
                {!pages.seePages.includes(Math.ceil(lastPage)) && <button value={Math.ceil(lastPage)} className={s.btn} onClick={handlePages}>{Math.ceil(lastPage)}</button>}
            </div>
    )
}

export default Pages;
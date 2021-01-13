import React from 'react'
import { Link } from 'react-router-dom'
import s from './table.module.css'

type TableProps = {
    headers: string[],
    body: TableBody[]

}

export type TableBody = {
    link: string,
    name: string,
    description?: string | number
}

const Table: React.FC<TableProps> = ({headers, body}): JSX.Element => {
    return(
        <table className={s.container_table}>
            <thead className={s.thead}>
                <tr style={{border: body.length ? '1px solid gray' : 'none'}}>
                    {headers.map(header=> (
                        <th key={header} className={s.header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className={s.tbody}>
                {body.map(section => (
                    <tr key={section.name}>
                        <td className={s.info}>
                            <Link to={`/${section.link.slice(26)}`} className={s.link}>
                                {section.name}
                            </Link>
                        </td>
                        {section.description && <td className={s.line}>{section.description}</td>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
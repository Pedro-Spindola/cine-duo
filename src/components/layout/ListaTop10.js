import styles from './ListaTop10.module.css'

function ListaTop10({id, nomeFilme, media}){

    return(
        <tr className={styles.tr}>
            <td className={styles.td}>{id}</td>
            <td className={styles.td}>{nomeFilme}</td>
            <td className={styles.td}>{media}</td>
        </tr>
    )
}

export default ListaTop10;
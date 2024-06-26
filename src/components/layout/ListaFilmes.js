import styles from './ListaFilmes.module.css'
import imgEditar from '../../img/editar.svg'
import imgApagar from '../../img/lixeira.svg'

function ListaFilmes(){
    return(
        <>
            <h2 className={styles.tituloH2}>FILMES CADASTRADOS</h2>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Nº</th>
                        <th className={styles.th}>NOME</th>
                        <th className={styles.th} colSpan={3}>NOTA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.td}>1ª</td>
                        <td className={styles.td}>Bad Boys</td>
                        <td className={styles.td}><button className={styles.btnEditar}><img src={imgEditar} alt="Editar"></img></button></td>
                        <td className={styles.td}><button className={styles.btnApagar}><img src={imgApagar} alt="Apagar"></img></button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>1ª</td>
                        <td className={styles.td}>Bad Boys</td>
                        <td className={styles.td}><button className={styles.btnEditar}><img src={imgEditar} alt="Editar"></img></button></td>
                        <td className={styles.td}><button className={styles.btnApagar}><img src={imgApagar} alt="Apagar"></img></button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListaFilmes;

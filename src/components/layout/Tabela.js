import styles from './Tabela.module.css'
import imgEstrelas from '../../img/star.solid.svg'

function Tabela(){

    return(
        <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Nº</th>
                    <th className={styles.th}>NOME</th>
                    <th className={styles.th}>ANO</th>
                    <th className={styles.th}>1º GÊNERO</th>
                    <th className={styles.th}>2º GÊNERO</th>
                    <th className={styles.th}>HIS</th>
                    <th className={styles.th}>ATU</th>
                    <th className={styles.th}>ROT</th>
                    <th className={styles.th}>EFE</th>
                    <th className={styles.th}>TRI</th>
                    <th className={styles.th}>HIS</th>
                    <th className={styles.th}>ATU</th>
                    <th className={styles.th}>ROT</th>
                    <th className={styles.th}>EFE</th>
                    <th className={styles.th}>TRI</th>
                    <th className={styles.th} colSpan={2}>MÉDIA</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.tr}>
                    <td className={styles.td}>1</td>
                    <td className={styles.td}>Bad Boys</td>
                    <td className={styles.td}>2024</td>
                    <td className={styles.td}>Ação</td>
                    <td className={styles.td}>Comedia</td>
                    <td className={styles.td}>8</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>8</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>9,5</td>
                    <td className={styles.td}></td>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.td}>1</td>
                    <td className={styles.td}>Bad Boys</td>
                    <td className={styles.td}>2024</td>
                    <td className={styles.td}>Ação</td>
                    <td className={styles.td}>Comedia</td>
                    <td className={styles.td}>8</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>8</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>9</td>
                    <td className={styles.td}>10</td>
                    <td className={styles.td}>9,5</td>
                    <td className={styles.td}></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela;
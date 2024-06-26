import styles from './Top10.module.css'

function Top10(){
    return(
        <>
            <select className={styles.select}>
                <option className={styles.option} disabled selected>
                    Selecione a categoria.
                </option>
                <option className={styles.option} value="acao">Ação</option>
                <option className={styles.option} value="comedia">Comédia</option>
                <option className={styles.option} value="drama">Drama</option>
                <option className={styles.option} value="fantasia">Fantasia</option>
                <option className={styles.option} value="terror">Terror</option>
            </select>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Nº</th>
                        <th className={styles.th}>NOME</th>
                        <th className={styles.th}>NOTA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.td}>1ª</td>
                        <td className={styles.td}>Bad Boys</td>
                        <td className={styles.td}>9,5</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>1ª</td>
                        <td className={styles.td}>Bad Boys</td>
                        <td className={styles.td}>9,5</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Top10;
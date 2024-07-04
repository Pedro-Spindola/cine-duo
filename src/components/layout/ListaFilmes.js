
import styles from './ListaFilmes.module.css'
import ListaTodosFilmes from './ListaTodosFilmes'

function ListaFilmes({meusFilmes, setDadosFilme, setDadosDelet}){
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
                {meusFilmes
                    .sort((a, b) => a.nomeDoFilme.localeCompare(b.nomeDoFilme)) // Ordena os filmes pelo nome do filme em ordem alfabética
                    .map((filme, index) => (
                        <ListaTodosFilmes  key={index} id={filme.id} rank={index + 1 + "º"} nomeFilme={filme.nomeDoFilme} anoDeLancamento={filme.anoDeLancamento} oneGenero={filme.oneGenero} twoGenero={filme.twoGenero}historiaP1={filme.historiaP1} atuacaoP1={filme.atuacaoP1} roteiroP1={filme.roteiroP1} efeitosP1={filme.efeitosP1} trilhaP1={filme.trilhaP1}historiaP2={filme.historiaP2} atuacaoP2={filme.atuacaoP2} roteiroP2={filme.roteiroP2} efeitosP2={filme.efeitosP2} trilhaP2={filme.trilhaP2} media={filme.media} setDadosFilme={setDadosFilme} setDadosDelet={setDadosDelet}/>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default ListaFilmes;

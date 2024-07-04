import styles from './ListaTodosFilmes.module.css'
import imgEditar from '../../img/editar.svg'
import imgApagar from '../../img/lixeira.svg'

function ListaTodosFilmes({ id, nomeFilme, rank, anoDeLancamento, oneGenero, twoGenero, historiaP1, atuacaoP1, roteiroP1, efeitosP1, trilhaP1, historiaP2, atuacaoP2, roteiroP2, efeitosP2, trilhaP2, media, setDadosFilme, setDadosDelet }){


    function handleEditarFilme() {
        // Aqui você pode passar os dados do filme para o componente pai
        setDadosFilme({
            id: id,
            nomeFilme: nomeFilme,
            anoDeLancamento: anoDeLancamento, 
            oneGenero: oneGenero, 
            twoGenero: twoGenero,
            historiaP1: historiaP1,
            atuacaoP1: atuacaoP1,
            roteiroP1: roteiroP1,
            efeitosP1: efeitosP1,
            trilhaP1: trilhaP1,
            historiaP2: historiaP2,
            atuacaoP2: atuacaoP2,
            roteiroP2: roteiroP2,
            efeitosP2: efeitosP2,
            trilhaP2: trilhaP2, 
            media: media
        });
    }

    function handleApagarFilme() {
        // Aqui você pode passar os dados do filme para o componente pai
        setDadosDelet({
            id: id
        });
    }

    return(
        <tr className={styles.tr}>
            <td className={styles.td}>{rank}</td>
            <td className={styles.td}>{nomeFilme}</td>
            <td className={styles.td}><button className={styles.btnEditar}><img src={imgEditar} onClick={handleEditarFilme} alt="Editar"></img></button></td>
            <td className={styles.td}><button className={styles.btnApagar}><img src={imgApagar} onClick={handleApagarFilme} alt="Apagar"></img></button></td>
        </tr>
    )
}

export default ListaTodosFilmes;

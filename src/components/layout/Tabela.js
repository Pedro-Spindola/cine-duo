import { useState, useEffect } from 'react'
import styles from './Tabela.module.css'
import LerFilme from './LerFilme'

function Tabela(){

    const [meusFilmes, setMeusFilmes] = useState([])
    const anoAtual = new Date().getFullYear();

    useEffect(() => {
        fetch('http://localhost:5000/meusFilmes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        .then(resp => resp.json())
        .then(data => {
            setMeusFilmes(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

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
                {meusFilmes
                .filter(filme => filme.anoDeLancamento <= anoAtual)
                .sort((a, b) => b.media - a.media)
                .map((filme, index) => (
                    <LerFilme key={index} id={index + 1 + "º"} nomeFilme={filme.nomeDoFilme} anoDeLancamento={filme.anoDeLancamento} oneGenero={filme.oneGenero} twoGenero={filme.twoGenero}historiaP1={filme.historiaP1} atuacaoP1={filme.atuacaoP1} roteiroP1={filme.roteiroP1} efeitosP1={filme.efeitosP1} trilhaP1={filme.trilhaP1}historiaP2={filme.historiaP2} atuacaoP2={filme.atuacaoP2} roteiroP2={filme.roteiroP2} efeitosP2={filme.efeitosP2} trilhaP2={filme.trilhaP2} media={filme.media}/>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;
import styles from './LerFilme.module.css'
import valor1 from '../../img/value1.png'
import valor2 from '../../img/value2.png'
import valor3 from '../../img/value3.png'
import valor4 from '../../img/value4.png'
import valor5 from '../../img/value5.png'
import valor6 from '../../img/value6.png'
import valor7 from '../../img/value7.png'

function LerFilme({id, nomeFilme, anoDeLancamento, oneGenero, twoGenero, historiaP1, atuacaoP1, roteiroP1, efeitosP1, trilhaP1, historiaP2, atuacaoP2, roteiroP2, efeitosP2, trilhaP2, media}){

    function imgIcone(){
        if(media >= 1 && media <= 2.2){
            return valor1;
        } else if(media >= 2.3 && media <= 3.5){
            return valor2;
        } else if(media >= 3.6 && media <= 4.8){
            return valor3;
        } else if(media >= 4.9 && media <= 6.1){
            return valor4;
        } else if(media >= 6.2 && media <= 7.4){
            return valor5;
        } else if(media >= 7.5 && media <= 8.7){
            return valor6;
        } else if(media >= 8.8 && media <= 10){
            return valor7;
        }else{
            return ;
        }
    }

    let icone = imgIcone();

    return(
        <tr className={styles.tr}>
            <td className={styles.td}>{id}</td>
            <td className={styles.td}>{nomeFilme}</td>
            <td className={styles.td}>{anoDeLancamento}</td>
            <td className={styles.td}>{oneGenero}</td>
            <td className={styles.td}>{twoGenero}</td>
            <td className={styles.td}>{historiaP1}</td>
            <td className={styles.td}>{atuacaoP1}</td>
            <td className={styles.td}>{roteiroP1}</td>
            <td className={styles.td}>{efeitosP1}</td>
            <td className={styles.td}>{trilhaP1}</td>
            <td className={styles.td}>{historiaP2}</td>
            <td className={styles.td}>{atuacaoP2}</td>
            <td className={styles.td}>{roteiroP2}</td>
            <td className={styles.td}>{efeitosP2}</td>
            <td className={styles.td}>{trilhaP2}</td>
            <td className={styles.td}>{media}</td>
            <td className={styles.td}><img src={icone}></img></td>
        </tr>
    )
}

export default LerFilme;
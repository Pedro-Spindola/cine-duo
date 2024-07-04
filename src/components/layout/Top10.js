import { useState, useEffect } from 'react'
import styles from './Top10.module.css'
import ListaTop10 from './ListaTop10';
import SelectGenero from '../util/Select';

function Top10(){

    const [meusFilmes, setMeusFilmes] = useState([])
    const [generoSelecionado, setGeneroSelecionado] = useState('');

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        .then(resp => resp.json())
        .then(data => {
            setCategories(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    useEffect(function(){

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
    }, [])

    const handleGeneroChange = (event) => {
        setGeneroSelecionado(event.target.value);
    };
/*
            <select className={styles.select} onChange={handleGeneroChange} value={generoSelecionado}>
                <option className={styles.option} value="" disabled selected>
                    Selecione a categoria.
                </option>
                <option className={styles.option} value="Ação">Ação</option>
                <option className={styles.option} value="Comédia">Comédia</option>
                <option className={styles.option} value="Drama">Drama</option>
                <option className={styles.option} value="Fantasia">Fantasia</option>
                <option className={styles.option} value="Terror">Terror</option>
            </select>
*/
    return(
        <>
            <SelectGenero styles={styles} textoLabel="" id="twoGenero" handleOnChange={handleGeneroChange} options={categories} disabled="" valor={generoSelecionado}/>
            

            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Nº</th>
                        <th className={styles.th}>NOME</th>
                        <th className={styles.th}>NOTA</th>
                    </tr>
                </thead>
                <tbody>
                {meusFilmes
                    .filter(filme => filme.oneGenero === generoSelecionado)
                    .map((filme, index) => (
                        <ListaTop10  key={index} id={index + 1 + "º"} nomeFilme={filme.nomeDoFilme} media={filme.media}></ListaTop10>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Top10;
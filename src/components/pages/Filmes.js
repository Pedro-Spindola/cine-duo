import styles from './Filmes.module.css'
import Container from '../layout/Container'
import ListaFilmes from '../layout/ListaFilmes';

function Filmes(){
    return (
        <main className={styles.main}>
            <section className={styles.sectionList}>
                <Container addClass={styles.container}>
                    <div className={styles.boxLista}>
                        <ListaFilmes></ListaFilmes>
                    </div>
                </Container>
            </section>
            <section className={styles.section}>
                <Container addClass={styles.container}>
                    <div className={styles.boxDados}>
                        <div className={styles.inputDados}>
                            <h2>Dados do filmes:</h2>
                            <div className={styles.boxDados1}>
                                <label>Nome do Filme: </label>
                                <input type='Text' id='nomeFilme' placeholder='Nome'></input>
                                <label>Ano de Lançamento: </label>
                                <input type='Text' id='anoLancamento' placeholder='Ano de Lançamento'></input>
                            </div>
                            <div className={styles.boxDados2}>
                                <label>Primeiro Gênero: </label>
                                <select className={styles.select}>
                                    <option className={styles.option} disabled selected>
                                    </option>
                                    <option className={styles.option} value="acao">Ação</option>
                                    <option className={styles.option} value="comedia">Comédia</option>
                                    <option className={styles.option} value="drama">Drama</option>
                                    <option className={styles.option} value="fantasia">Fantasia</option>
                                    <option className={styles.option} value="terror">Terror</option>
                                </select>
                                <label>Segundo Gênero: </label>
                                <select className={styles.select}>
                                    <option className={styles.option} disabled selected>
                                    </option>
                                    <option className={styles.option} value="acao">Ação</option>
                                    <option className={styles.option} value="comedia">Comédia</option>
                                    <option className={styles.option} value="drama">Drama</option>
                                    <option className={styles.option} value="fantasia">Fantasia</option>
                                    <option className={styles.option} value="terror">Terror</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.topico}>
                            <h2>Nota para as categorias:</h2>
                            <div className={styles.dadosTopico1}>
                                <h2>Pessoa 1</h2>
                                <label>História: </label>
                                <input type='Text' id='historia1' placeholder='Nota...'></input>
                                <label>Atuação: </label>
                                <input type='Text' id='atuacao1' placeholder='Nota...'></input>
                                <label>Roteiro: </label>
                                <input type='Text' id='roteiro1' placeholder='Nota...'></input>
                                <label>Efeito: </label>
                                <input type='Text' id='efeito1' placeholder='Nota...'></input>
                                <label>Trilha: </label>
                                <input type='Text' id='trilha1' placeholder='Nota...'></input>
                            </div>
                            <div className={styles.dadosTopico2}>
                                <h2>Pessoa 2</h2>
                                <label>História: </label>
                                <input type='Text' id='historia2' placeholder='Nota...'></input>
                                <label>Atuação: </label>
                                <input type='Text' id='atuacao2' placeholder='Nota...'></input>
                                <label>Roteiro: </label>
                                <input type='Text' id='roteiro2' placeholder='Nota...'></input>
                                <label>Efeito: </label>
                                <input type='Text' id='efeito2' placeholder='Nota...'></input>
                                <label>Trilha: </label>
                                <input type='Text' id='trilha2' placeholder='Nota...'></input>
                            </div>
                        </div>
                        <div className={styles.lineOpcoes}>
                            <button className={styles.btnOpcoes}>Adicionar</button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}
export default Filmes;
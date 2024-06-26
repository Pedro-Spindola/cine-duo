import styles from './Home.module.css'
import Container from '../layout/Container'
import Tabela from '../layout/Tabela'
import Top10 from '../layout/Top10'

function Home(){
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <Container addClass={styles.container}>
                    <div className={styles.boxTabela}>
                        <h2 className={styles.h2Titulos}>Rank dos filmes</h2>
                        <Tabela />
                    </div>
                </Container>
            </section>
            <aside className={styles.aside}>
                <Container addClass={styles.container}>
                    <div className={styles.boxTop}>
                        <h2 className={styles.h2Titulos}>Os melhores filmes</h2>
                        <Top10 />
                    </div>
                </Container>
            </aside>
        </main>
    )
}
export default Home;
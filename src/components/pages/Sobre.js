import styles from './Sobre.module.css'
import Container from '../layout/Container';

function Sobre(){
    return (
        <main className={styles.main}>
            <Container addClass={styles.container}>
                <div className={styles.boxSobre}>
                    <h2 className={styles.titulo}>MEU TITULO</h2>
                    <div className={styles.texto}>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut justo sed nisl porta vehicula. Donec et purus feugiat, 
                            sollicitudin justo cursus, fringilla urna. Aenean nisl ex, molestie ac enim a, congue maximus tortor. Nulla facilisis nisl 
                            sit amet aliquet cursus. Fusce posuere sed urna quis porta. Proin ut arcu posuere, fringilla leo eu, convallis ante. 
                            Vestibulum non tempor dui. Sed lectus sapien, posuere nec est ut, ornare sagittis turpis. Vestibulum dictum vitae diam 
                            consequat porta. Ut in fermentum ante, et imperdiet turpis. Mauris porta tortor vitae sem facilisis, et cursus elit iaculis. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec dui mi. Sed nibh libero, 
                            ullamcorper at aliquam sed, vulputate a erat. Fusce ut ante in nunc accumsan tincidunt. Cras elementum commodo vehicula.</h3>
                    </div>
                </div>
            </Container>
        </main>
    )
}
export default Sobre;
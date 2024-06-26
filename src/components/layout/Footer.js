import styles from './Footer.module.css'

function Footer(){
    const anoAtual = new Date().getFullYear();

    return(
        <footer>
                <div className={styles.direitos}>
                    <h2>© DEV.SPINDOLA 2022 - {anoAtual} Todos os direitos reservados</h2>
                </div>
        </footer>
    )
}
export default Footer;
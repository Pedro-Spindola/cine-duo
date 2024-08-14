import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import Container from './Container';
import barsMobile from '../../img/bars-solid.svg'
function NavBar(){
    console.log(styles);  // Adicione isso para verificar a saída no console
    return (
        <nav className = {styles.navegation}>
            <Container addClass={styles.container}>
                <div className={styles.navMenu}>
                    <ul className={styles.ulClass}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/filmes">Filmes</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <img src={barsMobile} alt=""></img>
                    </ul>
                </div>
                <div className={styles.navMobile}>
                    <ul className={styles.ulClass}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/filmes">Filmes</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}
export default NavBar;
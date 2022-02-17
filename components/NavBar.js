import Divider from '../components/Divider';
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <>
        <div className={styles.navContainer} styles='background-color: #FFFF;'>
            <nav className={styles.nav}>
                <h4 className={styles.logo}>
                    El Pasquino
                </h4>
                <div className={styles.navMenu}>
                    <span className={styles.span}>
                        <Link href="/">
                            <a>Portada</a>
                        </Link>
                    </span>
                    <span className={styles.span}>
                        <Link href="/nosotros">
                            <a>Nosotros</a>
                        </Link>
                    </span>
                </div> 
            </nav>
            <Divider/>
        </div>
        </>
    );
}
    
export default NavBar;
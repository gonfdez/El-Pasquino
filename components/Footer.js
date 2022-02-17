import Divider from "./Divider";
import styles from '../styles/Footer.module.css'

const Footer = () => {
return (
    <>
    <Divider/>
    <div className={styles.footerContainer}>
        <div className={styles.cols}>
            <div className={styles.col1}>
            <h4 className={styles.logo}>
                El Pasquino
            </h4>
            </div>
            <div className={styles.col2}>
                <a href="mailto:revista@elpasquino.org"> revista@elpasquino.org</a>
                 <img src="/twitter.svg" alt="Twitter" className={styles.img} />
            </div> 
        </div>
        <span className={styles.d}>Proyecto nacido en Madrid, España.</span>
    </div>
    </>
    );
}

export default Footer;



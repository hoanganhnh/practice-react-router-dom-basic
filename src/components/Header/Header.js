import {
    Link
} from "react-router-dom"
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.wapper} id="head">
            <div className={styles.container}> 
                <div className={styles.container__logo}>
                    <Link to="/">
                        <img src="https://thumbs.dreamstime.com/b/interior-logo-design-illustration-house-furniture-symbol-vector-template-interior-logo-design-illustration-house-furniture-167975937.jpg" alt=""/>
                    </Link>
                </div>
                <div className={styles.container__navbar}>
                    <ul className={styles.wapperLink}>
                        <li>
                            <Link className={styles.wapperLink__home} to="/">
                                home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={styles.wapperLink__about}>
                                about
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" className={styles.wapperLink__work}>
                                work
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className={styles.wapperLink__services}>
                                services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={styles.wapperLink__contact}>
                                contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
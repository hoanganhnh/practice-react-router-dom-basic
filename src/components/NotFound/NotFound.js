import {
    Link
} from "react-router-dom"
import styles from './NotFound.module.scss';
function NotFound() {
    return (
        <>
            <div className={styles.wapper}>
                <div className={styles.content}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <Link to='/'>back to home</Link>
                </div>
                <img className={styles.img} src="http://www.supah.it/dribbble/008/008.jpg" alt="" />
            </div>
        </>
    )
}

export default NotFound
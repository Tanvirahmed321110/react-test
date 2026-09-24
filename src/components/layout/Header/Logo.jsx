import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export default function Logo() {
    return (
        <Link to="/">
            <h2 className={styles.logo}>LOGO.</h2>
        </Link>
    );
}
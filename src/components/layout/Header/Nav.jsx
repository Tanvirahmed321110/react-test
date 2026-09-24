import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/products">Product</NavLink>
        </nav>
    );
}


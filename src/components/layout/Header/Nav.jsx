import styles from './Header.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    );
}


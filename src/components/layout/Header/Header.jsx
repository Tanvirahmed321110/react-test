import Logo from "./Logo";
import Nav from "./Nav"
import styles from "./Header.module.css"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className='container'>
                <div className={styles.header_wrap}>
                    <Logo></Logo>
                    <Nav></Nav>
                    <Link className={styles.login} to="/login">Login</Link>
                </div>
            </div>
        </header >
    )
}
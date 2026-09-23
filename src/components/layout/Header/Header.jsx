import Logo from "./Logo";
import Nav from "./Nav"
import styles from "./Header.module.css"

export default function Header() {
   return (
      <header>
         <div className='container'>
            <div className={styles.header_wrap}>
               <Logo></Logo>
               <Nav></Nav>
               <a className={styles.login} href="/login">Login</a>
            </div>
         </div>
      </header >
   )
}
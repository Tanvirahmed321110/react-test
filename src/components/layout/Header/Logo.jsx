import styles from './Header.module.css'

export default function Logo() {
   return (
      <a href="/">
         <h2 className={styles.logo}>LOGO.</h2>
      </a>
   );
}
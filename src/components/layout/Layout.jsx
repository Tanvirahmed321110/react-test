import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.css";

export default function Layout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main><Outlet /></main>

            <Footer />
        </div>
    );
}
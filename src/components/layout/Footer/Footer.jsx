import Logo from "../Header/Logo";
import FooterBottom from "./FooterBottom";
import Social from "./Social";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footerWrap">
                    <div className="footerTop">
                        <Logo />
                        <Social />
                    </div>

                    <div className="footerBottom">
                        <FooterBottom />
                    </div>
                </div>
            </div>
        </footer>
    );
}
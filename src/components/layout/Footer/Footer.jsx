import Logo from "../Header/Logo";
import FooterBottom from "./FooterBottom";
import Social from "./Social";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer section-gap">
            <div className="footer-area">
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
            </div>

        </footer>
    );
}
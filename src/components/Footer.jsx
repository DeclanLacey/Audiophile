import {Link} from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
    return (
        <footer className="footer">

            <img src="/assets/shared/desktop/logo.svg" />

            <div className="footer_nav-container">
                <Link> <button className="footer_nav-link"> home </button></Link>
                <Link> <button className="footer_nav-link"> headphones </button></Link>
                <Link> <button className="footer_nav-link"> speakers </button></Link>
                <Link> <button className="footer_nav-link"> earphones </button></Link>
            </div>

            <div>
                <p className="footer_company-desc"> Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week. </p>
            </div>

            <div className="footer_bottom-container">
                <p> Copyright 2021. All Rights Reserved </p>
                <div>
                    <a>
                        <img className="footer_social-img" src="assets/shared/desktop/icon-facebook.svg" />
                    </a>
                    <a>
                        <img className="footer_social-img" src="assets/shared/desktop/icon-twitter.svg"/>
                    </a>
                    <a>
                        <img className="footer_social-img" src="assets/shared/desktop/icon-instagram.svg"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import { memo } from "react"
import { Link as LinkRouter } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import "./footer.css"

const Footer = memo(function Footer() {

    const currentYear = new Date().getFullYear().toString()

    return (
        <section className="footer">
            <div className="footer__Inner container">
                <div className="footer__info" >
                    <h3 className="footer__title">Information</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/about">About us</LinkRouter>
                        </li>
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/contact">Contact us</LinkRouter>
                        </li>
                    </ul>
                </div>
                <div className="footer__costumer" >
                    <h3 className="footer__title">Our expertise</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/services">Services</LinkRouter>
                        </li>
                        <li className="footer__listItem">
                            <LinkRouter className="footer__link" to="/projects">Projects</LinkRouter>
                        </li>
                    </ul>
                </div>
                <div className="footer__follow">
                    <h3 className="footer__title">Follow us</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem footer__listItem--social" >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="LinkedIn account link">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="footer__listItem footer__listItem--social" >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Instagram account link">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="footer__listItem footer__listItem--social" >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Facebook account link" >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className="footer__listItem footer__listItem--social" >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Twitter account link">
                                <FaXTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; Copyright {currentYear}</p>
                Waveast Installation & Park Services
            </div>
        </section>
    )
})

export default Footer
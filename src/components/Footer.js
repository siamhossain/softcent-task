import React from 'react'
import logo from '../assets/images/logo.png';
import '../styles/footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="footer-section">
            <div className="container">
            
                <div className="start-project-area">
                    <h1>Looking for a <br/>Software Partner?</h1>
                    <button>Start a project</button>
                </div>
            

                <div className="footer-info">
                    <div className="footer-details">
                        <img src={logo} alt="" />
                        <div className="text">
                            <span>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.
                            </span>
                        </div>
                        <p>Email: info@softcent.eu</p>
                        <p>Phone: +(372) 57836500</p>
                        <div className="social-icons">
                            <FaFacebook className='facebook' />
                            <FaWhatsapp className='whatsapp'/>
                            <FaTwitter className='twitter'/>
                            <FaInstagram className='instagram'/>
                        </div>
                    </div>

                    <div className="footer-content">
                        <div className="content-title">
                            <h5>Company</h5>
                        </div>
                        <div className="content-list">
                            <ul>
                                <li><a href=""> About us </a></li>
                                <li><a href=""> Our portfolio </a></li>
                                <li><a href=""> Our Product </a></li>
                                <li><a href=""> Our Team </a></li>
                                <li><a href=""> Our Priceing </a></li>
                                <li><a href=""> Testimonials </a></li>
                                <li><a href=""> Contact Us </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="content-title">
                            <h5>Our Services</h5>
                        </div>
                        <div className="content-list">
                            <ul>
                                <li><a href=""> Marketing </a></li>
                                <li><a href=""> UI/UX Design </a></li>
                                <li><a href=""> Graphic Design (Branding) </a></li>
                                <li><a href=""> Development </a></li>
                                <li><a href=""> New Products </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="content-title">
                            <h5>Company</h5>
                        </div>
                        <div className="content-list">
                            <ul>
                                <li><a href=""> FAQs </a></li>
                                <li><a href=""> Support Policy </a></li>
                                <li><a href=""> Privacy Policy </a></li>
                                <li><a href=""> Trams of Service </a></li>
                                <li><a href=""> Refund Policy </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2022, Softcent EU, A European IT company</span>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Footer;
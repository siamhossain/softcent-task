import React from 'react'
import ServiceHeadingUnderline from '../assets/images/what-we-do.png'
import BrandingIcon from '../assets/icons/branding.png'
import uxDesign from '../assets/icons/UX.png'
import '../styles/serviceSection.css';

const ServiceSection = () => {
  return (
    <div>
        <div className="service-section">
            <div className="container">
                <div className="service-content-area">
                    <h1>What We Do</h1>
                    <div className="service-heading-underline">
                        <img src={ServiceHeadingUnderline} alt="" />
                    </div>

                    <div className="services">
                        <div className="branding">
                            <div className="branding-title">
                                <img src={BrandingIcon} alt="" />
                                <h4>Branding</h4>
                            </div>
                            <div className="branding-list">
                                <ul>
                                    <li>Brand Strategy </li>
                                    <li>Social media</li>
                                    <li>Marketing Assets</li>
                                    <li>Presentations</li>
                                    <li>Build MVP Version</li>
                                    <li>Pitch Deck</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ui-ux-design">
                            <div className="design-title">
                                <img src={uxDesign} alt="" />
                                <h4>UI/UX Design</h4>
                            </div>
                            <div className="design-list">
                                <ul>
                                    <li>User Interface </li>
                                    <li>User Experience</li>
                                    <li>Design System</li>
                                    <li>Wireframe</li>
                                    <li>Prototype</li>
                                    <li>website & Mobile App</li>
                                    <li>IOS + Android</li>
                                </ul>
                            </div>
                        </div>
                        <div className="development">
                            <div className="development-title">
                                <img src={uxDesign} alt="" />
                                <h4>Development</h4>
                            </div>
                            <div className="development-list">
                                <ul>
                                    <li>Front End (HTML, CSS, React)</li>
                                    <li>Backend (Node.js, MongoDB)</li>
                                    <li>iOS (Swift)</li>
                                    <li>Android (Kotlin, Flutter)</li>
                                    <li>Blockchain Development (NFT)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default ServiceSection;
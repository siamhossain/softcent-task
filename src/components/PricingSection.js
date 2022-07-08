import React from 'react'
import pricingUnderline from '../assets/images/pricing-underline.png';
import '../styles/pricingSection.css';

const PricingSection = () => {
  return (
    <div>
        <div className="pricing-section">
            <div className="container">
                <div className="pricing-heading">
                    <h1>Pricing Package Choose Your Plan</h1>
                    <div className="pricing-heading-underline">
                        <img src={pricingUnderline} alt="" />
                    </div>
                    <div className="sub-text">
                        <p>We believe that great design should not be out of reach, so our services<br/> are less than half the price of a full-time designer.</p>
                    </div>
                </div>  

                <div className="pricing-policy-btn">
                    <button className='monthly-btn'>Monthly</button>
                    <button className='yearly-btn pricing-policy-active-btn'>Yearly</button>
                </div>

                <div className="pricing-table-area">
                    <div className="pricing-table">
                        <div className="pricing-table-heading">
                            <div className="pricing-table-title">
                                <h3>Marketing</h3>
                                <div className="title-border"></div>
                            </div>
                            <div className="price">
                                <h4>$899/ mo</h4>
                            </div>
                        </div>
                        <div className="pricing-feature-list">
                            <ul>
                                <li>Dedicated Designer</li>
                                <li>Unlimited requests</li>
                                <li>Unlimited brand profiles</li>
                                <li>Native source files</li>
                                <li>Real-time collaboration</li>
                                <li>Banner Ads</li>
                                <li>Clothing & Merchandise Design</li>
                                <li>Packaging & Label</li>
                                <li>Logo & Brand Guide</li>
                            </ul>
                        </div>
                        <div className="pricing-table-button">
                            <button>$899 / mo</button>
                        </div>
                    </div>

                    <div className="pricing-table">
                        <div className="pricing-table-heading">
                            <div className="pricing-table-title">
                                <h3>UI/UX Design</h3>
                                <div className="title-border"></div>
                            </div>
                            <div className="price">
                                <h4>$899/ mo</h4>
                            </div>
                        </div>
                        <div className="pricing-feature-list">
                            <ul>
                                <li>Dedicated Designer</li>
                                <li>Unlimited requests</li>
                                <li>Unlimited brand profiles</li>
                                <li>Native source files</li>
                                <li>Real-time collaboration</li>
                                <li>Banner Ads</li>
                                <li>Clothing & Merchandise Design</li>
                                <li>Packaging & Label</li>
                                <li>Logo & Brand Guide</li>
                            </ul>
                        </div>
                        <div className="pricing-table-button">
                            <button>$899 / mo</button>
                        </div>
                    </div>

                    <div className="pricing-table">
                        <div className="pricing-table-heading">
                            <div className="pricing-table-title">
                                <h3>Development</h3>
                                <div className="title-border"></div>
                            </div>
                            <div className="price">
                                <h4>$899/ mo</h4>
                            </div>
                        </div>
                        <div className="pricing-feature-list">
                            <ul>
                                <li>Dedicated Designer</li>
                                <li>Unlimited requests</li>
                                <li>Unlimited brand profiles</li>
                                <li>Native source files</li>
                                <li>Real-time collaboration</li>
                                <li>Banner Ads</li>
                                <li>Clothing & Merchandise Design</li>
                                <li>Packaging & Label</li>
                                <li>Logo & Brand Guide</li>
                            </ul>
                        </div>
                        <div className="pricing-table-button">
                            <button>$899 / mo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default PricingSection;

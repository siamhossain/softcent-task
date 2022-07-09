import React from 'react'
import '../styles/customerSection.css';
import customerUnderline from '../assets/images/customer-underline.png';
import UBS from '../assets/images/ubs.png';
import HSBC from '../assets/images/hsbc.png';
import FITLAB from '../assets/images/fitlab.png';
import APPSERO from '../assets/images/appsero.png';



 const CustomerSection = () => {
  return (
    <div>
        <div className="customer-section">
            <div className="container">
                <div className="our-customers-heading">
                    <h1>Our Customers</h1>
                    <div className="customer-heading-underline">
                        <img src={customerUnderline} alt="customerUnderline" />
                    </div>
                </div>  
              
                <div className="customers-logo">
                    <img src={UBS} alt="UBS" />
                    <img src={HSBC} alt="HSBC" />
                    <img src={FITLAB} alt="FITLAB" />
                    <img src={APPSERO} alt="APPSERO" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerSection;

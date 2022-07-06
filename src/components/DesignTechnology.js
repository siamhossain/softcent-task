import React from 'react'
import '../styles/designTechnology.css';
import designTechUnderline from '../assets/images/design-tech-underline.png';
import AI from '../assets/images/Ai.png';
import FIGMA from '../assets/images/figma.png';
import IN from '../assets/images/In.png';
import XD from '../assets/images/Xd.png';
import PS from '../assets/images/Ps.png';



 const DesignTechnology = () => {
  return (
    <div>
        <div className="design-tech-section">
            <div className="container">
                <div className="design-tech-heading">
                    <h1>Our Design Technology</h1>
                    <div className="design-tech-heading-underline">
                        <img src={designTechUnderline} alt="" />
                    </div>
                </div>  
              
                <div className="design-tech-logo">
                    <img src={FIGMA} alt="" />
                    <img src={IN} alt="" />
                    <img src={XD} alt="" />
                    <img src={PS} alt="" />
                    <img src={AI} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesignTechnology;

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
                        <img src={designTechUnderline} alt="designTechUnderline" />
                    </div>
                </div>  
              
                <div className="design-tech-logo">
                    <img src={FIGMA} alt="FIGMA" />
                    <img src={IN} alt="IN" />
                    <img src={XD} alt="XD" />
                    <img src={PS} alt="PS" />
                    <img src={AI} alt="AI" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesignTechnology;

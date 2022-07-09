import React, { useState } from 'react';
import PHP from '../assets/images/php.png'
import JS from '../assets/images/js.png'
import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import SHELL from '../assets/images/shell.png'
import devTechUnderline from '../assets/images/dev-tech-underline.png'
import '../styles/devTechnology.css';



const DevTechnology = () => {

  const [activeTab, setActiveTab] = useState(1);
  


  return (
    <div>
        <div className="dev-tech-section">
            <div className="container">
                <div className="dev-tech-heading">
                    <h1>Our Design Technology</h1>
                    <div className="dev-tech-heading-underline">
                        <img src={devTechUnderline} alt="" />
                    </div>
                </div>  

                <div class="tab">
                    <button onClick={() => setActiveTab(1)}>Programming Languages</button>
                    <button onClick={() => setActiveTab(2)}>Frameworks</button>
                    <button onClick={() => setActiveTab(3)}>Databases</button>
                    <button onClick={() => setActiveTab(4)}>Mobile Platforms</button>
                </div>


                {activeTab === 1 && (
                  <div id="London" class="tabcontent">
                      <div className="dev-tech-logo">
                          <img src={PHP} alt="PHP" />
                          <img src={JS} alt="JS" />
                          <img src={HTML} alt="HTML" />
                          <img src={CSS} alt="CSS" />
                          <img src={SHELL} alt="SHELL" />
                      </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div id="London" class="tabcontent">
                    <div className="dev-tech-logo">
                        <img src={PHP} alt="PHP" />
                        <img src={JS} alt="JS" />
                        <img src={HTML} alt="HTML" />
                        <img src={CSS} alt="CSS" />
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div id="London" class="tabcontent">
                      <div className="dev-tech-logo">
                          <img src={PHP} alt="PHP" />
                          <img src={JS} alt="JS" />
                          <img src={HTML} alt="HTML" />
                      </div>
                  </div>
                )}

                {activeTab === 4 && (
                  <div id="London" class="tabcontent">
                      <div className="dev-tech-logo">
                          <img src={PHP} alt="PHP" />
                          <img src={JS} alt="JS" />
                          <img src={HTML} alt="HTML" />
                          <img src={CSS} alt="CSS" />
                          <img src={SHELL} alt="SHELL" />
                      </div>
                  </div>
                )}


                
            </div>
        </div>
    </div>
  )
}


export default DevTechnology;

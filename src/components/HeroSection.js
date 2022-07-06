import React from 'react'
import '../styles/heroSection.css';
import heroVideo from '../assets/images/hero-video.png';
import headingUnderline from '../assets/images/hero-heading-underline.png';
import playButton from '../assets/icons/ic_play.png';



 const HeroSection = () => {
  return (
    <div>
        <div className="hero-section">
            <div className="container">
                <div className="hero-text-content">
                    <div className="heading-underline">
                        <img src={headingUnderline} alt="" />
                    </div>
                    <h1 className="hero-heading">
                        Software services for startups without limits..
                    </h1>
                    <p className="sub-text">
                        We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.
                    </p>
                </div>
                <div className="video-content">
                    <img className="video-img" src={heroVideo} alt="" />
                    <img className="playButton" src={playButton} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;

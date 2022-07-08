import React from 'react'
import '../styles/portfolio.css';
import portfolioUnderline from '../assets/images/portfolio-underline.png'
import colorDesign from '../assets/images/colory-design.png'
import logoDesign from '../assets/images/logo-design.png'
import uiDesign from '../assets/images/ui-design.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Portfolio = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
      };


    
  return (
    <div>
        <div className="portfolio-section">
            <div className="container">
                <div className="portfolio-heading-area">
                    <h1>Our Portfolio</h1>
                    <div className="service-heading-underline">
                        <img src={portfolioUnderline} alt="" />
                    </div>
                </div>

                <div className="portfolio-slider">
                    <Slider {...settings}>
                        <img src={colorDesign} alt="" />
                        <img src={logoDesign} alt="" />
                        <img src={uiDesign} alt="" />
                        <img src={colorDesign} alt="" />
                        <img src={uiDesign} alt="" />
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Portfolio; 
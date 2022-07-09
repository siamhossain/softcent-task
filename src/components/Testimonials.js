import React from 'react';
import testimonialUnderline from '../assets/images/testimonial-underline.png';

import '../styles/testimonials.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleTestimonial from './SingleTestimonial';



const Testimonials = () => {



    const settings = {
        dots: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };


  return(
      <div>
        <div className="testimonial-section">
            <div className="container">
                <div className="testimonial-heading">
                    <h1>Talk About Us!</h1>
                    <div className="workflow-heading-underline">
                        <img src={testimonialUnderline} alt="" />
                    </div>
                </div> 
                
                <div className="testimonial-slider-wrapper">
                    <Slider {...settings}>    
                        <SingleTestimonial/>
                        <SingleTestimonial/>
                        <SingleTestimonial/>
                    </Slider>
                </div>
                
            </div>
        </div>
      </div>
  )
}

export default Testimonials ;

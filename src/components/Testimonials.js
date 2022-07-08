import React from 'react';
import testimonialUnderline from '../assets/images/testimonial-underline.png';
import quote1 from '../assets/images/quote-1.png';
import quote2 from '../assets/images/quote-2.png';
import avatar from '../assets/images/avatar.png';
import testimonial from '../assets/images/testimonial.png';
import '../styles/testimonials.css';

const Testimonials = () => {
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
                <div className="testimonial-content-area">
                    <div className="testimonial-qoute">
                        
                        <div className="quote-text">
                            <p>
                                We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.
                            </p>
                            <img src={quote1} alt="" className='quote1'/>
                            <img src={quote2} alt="" className='quote2'/>
                        </div>
                        
                        
                        <div className="testimonial-avatar">
                            <img src={avatar} alt="" />
                            <div className="comment-info">
                                <p className='name'>Shuvo Roy</p>
                                <p className='designation'>Softcent Co-Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-img">
                        <img src={testimonial} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Testimonials ;

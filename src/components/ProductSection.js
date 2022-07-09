import React from 'react'
import productHeadinUnderline from '../assets/images/our-product.png';
import Product1 from '../assets/images/product1.png';
import Product2 from '../assets/images/product2.png';
import '../styles/productSection.css'

const ProductSection = () => {
  return (
    <div>
        <div className="product-section">
            <div className="container">
                <div className="product-heading-area">
                    <div>
                        <h1>Our Products</h1>
                        <div className="service-heading-underline">
                            <img src={productHeadinUnderline} alt="productHeadinUnderline" />
                        </div>
                        <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    </div>
                    <div className="see-more-btn">
                        <button>See More</button>
                    </div>
                </div>
            </div>
            
            <div className="product-and-details1">
                <div className="product-text-content">
                    <h1>SwipeXYZ Product</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="view-product-btn">
                        <button>View Product</button>
                    </div>
                </div>
                <div className="product-img">
                    <img src={Product1} alt="Product1" />
                </div>
            </div>

            <div className="product-and-details2">
                <div className="product-img">
                    <img src={Product2} alt="Product2" />
                </div>
                <div className="product-text-content">
                    <h1>Cashback Product</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="view-product-btn">
                        <button>View Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default ProductSection
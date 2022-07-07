import React from 'react'
import CustomerSection from '../components/CustomerSection';
import DesignTechnology from '../components/DesignTechnology';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import ServiceSection from '../components/ServiceSection';

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection/>
        <CustomerSection/>
        <ServiceSection/>
        <ProductSection/>
        <DesignTechnology/>
    </div>
  )
}

export default Home; 

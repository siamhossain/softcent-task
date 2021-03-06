import React from 'react'
import CustomerSection from '../components/CustomerSection';
import DesignTechnology from '../components/DesignTechnology';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Portfolio from '../components/Portfolio';
import PricingSection from '../components/PricingSection';
import ProductSection from '../components/ProductSection';
import ServiceSection from '../components/ServiceSection';
import DevTechnology from '../components/DevTechnology';
import Testimonials from '../components/Testimonials';
import Workflow from '../components/Workflow';

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection/>
        <CustomerSection/>
        <ServiceSection/>
        <ProductSection/>
        <PricingSection/>
        <Testimonials/>
        <Portfolio/>
        <DevTechnology/>
        <DesignTechnology/>
        <Workflow/>
        <Footer/>
    </div>
  )
}

export default Home; 

import React from 'react'
import CustomerSection from '../components/CustomerSection';
import DesignTechnology from '../components/DesignTechnology';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection/>
        <CustomerSection/>
        <DesignTechnology/>
    </div>
  )
}

export default Home; 

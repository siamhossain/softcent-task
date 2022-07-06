import React from 'react'
import CustomerSection from '../components/CustomerSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection/>
        <CustomerSection/>
    </div>
  )
}

export default Home; 

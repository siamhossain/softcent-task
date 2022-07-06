import React from 'react';
import logo from '../assets/images/logo.png';
import headerShadow2 from '../assets/images/header-shadow.png';
import headerShadow1 from '../assets/images/hero-shadow.png';
import '../styles/header.css';



const Header = () => {
  return (
    <div>
        <div className="header-section">
            <div className="header-bg-shadow1">
                <img src={headerShadow1} alt="" />
            </div>
            <div className="header-shadow2">
                <img src={headerShadow2} alt="" />
            </div>
            <div className="container">
                <div className="nav">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>

                    <div className="menu-list">
                        <ul>
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Work</a></li>
                            <li><a href="#portfolio">Premium Products</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>

                    <div className="header-btn">
                        <button>Start a project</button>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}


export default Header;

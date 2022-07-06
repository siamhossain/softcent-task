import React from 'react';
import logo from '../assets/images/logo.png';
import headerShadow from '../assets/images/header-shadow.png';
import '../styles/header.css';



const Header = () => {
  return (
    <div>
        <div className="header-section">
            <img className='header-shadow' src={headerShadow} alt="" />
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

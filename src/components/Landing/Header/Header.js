import React, { Component } from 'react';
import Landing from '../Landing';
import sunset from './sunset.jpeg'
import './Header.css';

const Header = () => {
    return (
      <header className="vertical-center header-landing">
        <div>
          <h1><a href="/">Octavio Serrano</a></h1>
          <img src={sunset} alt="background image" />
          <h2></h2>
        </div>
      </header>
    )
}

export default Header;

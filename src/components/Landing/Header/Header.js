import React, { Component } from 'react';
import Landing from '../Landing';
import sunset from './sunset.jpg'
import './Header.css';

const Header = () => {
    return (
      <header className="vertical-center header-landing">
        <div>
          <h1><a href="/">Octavio Serrano</a></h1>
          <h2></h2>
        </div>
      </header>
    )
}

export default Header;

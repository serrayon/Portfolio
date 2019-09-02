import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  props = {
    history: []
  }
  return (
    <nav>
      <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
      <ul>
        {/* <Link to={'/#about'}>About</Link> */}
        <li><a href="/#about">About</a></li>
        {/* <Link to={'/#gallery'}>Gallery</Link> */}
        <li><a href="/#projects">Projects</a></li>
        {/* <li><a href="/#wtf">Resume</a></li> */}
        <Link to={'/resume'} onClick={() => props.history.push("/resume")}>Resume</Link>
        {/* <li><a href="blog.html">Blog</a></li> */}
        {/* <li><a href="/#blog-header">Blog</a></li> */}
        {/* <Link to={'/#contact'}>Contact</Link> */}
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  )
  
}

export default NavBar;

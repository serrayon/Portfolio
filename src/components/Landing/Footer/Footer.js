import React from 'react';

const Footer = () => {
    return (
      <footer>
        <div className="wrap">
          <div className="social-links">
            {/* <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a> */}
            <a href="https://github.com/serrayon"><i className="fa fa-github" aria-hidden="true"></i></a>
            <a href="https://https://www.linkedin.com/in/octavio-serrano/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          </div>
          {/* <input type="text" placeholder="Email Address" />
          <button type="submit">Subscribe</button> */}
        </div>

        <p className="copyright">&copy;2019 Octavio Serrano</p>
      </footer>
    )
}

export default Footer;

import React from 'react';

import project1 from './PortSwigger.png';
import project2 from './footLocker.png';
import project3 from './twitter.png';

const Projects = () => {
  
    return (
      <section id='projects'>
<h2>Projects</h2>

<div className="grid-wrapper articles">
  <article className="col-third">
  <h3>CSRF Vulnerabilities PortSwigger</h3>
    <img src={project1} alt="Landing screen for site" />
    <div> 
      <p className='p3'>I have used Burp Suite to create HTML scripts that exploit cross-site request forgery (CSRF) vulnerabilities in web applications. By creating scripts that simulate these attacks, I was able to test the security of web applications and identify potential vulnerabilities that needed to be addressed.</p>
      <a href="https://github.com/serrayon/CSRF-" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className='herokuOne'>Foot Locker Automated</h3>
    <img src={project2} alt="Landing screen FootLocker" />
    <div>
    
      <p className='p3'>Automated the sign in process for the Foot Locker web site. Using Python, Selenium, Chrome WebDriver. Next challenge is to automate the capchka process.
</p>
      <a  href="https://github.com/serrayon/footLocker" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className="herokuTwo">Twitter clone</h3>
    <img src={project3} alt="Login page for Twitter clone" />
    <a type='hidden' href="https://teamtwitterga.herokuapp.com/">Heroku Link</a>
    <p className='p3'>Built during a 5 day sprint using Django and Python.  Achieved full CRUD capabilities, lacking some main functionality that would be found on the Twitter platform, but for a 5 day sprint it was great to accomplish the basics.</p>
    <a href="https://github.com/serrayon/Twitter" >View Source</a>
  </article>
</div>
</section> 
    )
}

export default Projects;








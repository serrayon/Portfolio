import React from 'react';

import project1 from './black_jack.png';
import project2 from './algorithm_python.png';
import project3 from './twitter.png';

const Projects = () => {
  
    return (
      <section id='projects'>
<h2>Projects</h2>

<div className="grid-wrapper articles">
  <article className="col-third">
  <h3>Black Jack</h3>
    <img src={project1} alt="Landing screen for game" />
    <div> 
    <a href="https://master.d2iw13smmc9pb.amplifyapp.com/" target="_blank">Give it a go!</a>
      <p className='p3'>Developed a Blackjack web game including deck of cards concept with correct number and values in standard card deck, shuffle and deal functionality, and game win/loss logic.</p>
      <a href="https://github.com/serrayon/Black-Jack" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className='herokuOne'>Algorithm for file updates in Python</h3>
    <img src={project2} alt="Algorithm for file updates in Python" />
    <div>
      <p className='p3'>Python script automates tedious workflow, ensuring that only approved IP addresses are granted permission to access a network. This script accelerates the process, minimizing the risk of human error.
</p>
      <a  href="https://github.com/serrayon/ip_algo" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className="herokuTwo">Twitter clone</h3>
    <img src={project3} alt="Login page for Twitter clone" />
    
    <p className='p3'>Built during a 5 day sprint using Django and Python.  Achieved full CRUD capabilities, lacking some main functionality that would be found on the Twitter platform, but for a 5 day sprint it was great to accomplish the basics.</p>
    <a href="https://github.com/serrayon/Twitter" >View Source</a>
  </article>
</div>
</section> 
    )
}

export default Projects;
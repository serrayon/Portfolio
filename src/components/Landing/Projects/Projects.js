import React from 'react';

import project1 from './black_jack.png';
import project2 from './world.png';
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
      <p>Developed a Blackjack web game including deck of cards concept with correct number and values in standard card deck, shuffle and deal functionality, and game win/loss logic.</p>
      <a href="https://github.com/serrayon/Black-Jack" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className='herokuOne'>World of Literature</h3>
    <img src={project2} alt="Login page for World of Literature" />
    <div>
      <a href="https://worldofliteratureabcd.herokuapp.com/">Heroku Link</a>
      <p>Developed and deployed a database of authors from around the world with CRUD functionality
Technologies used: JavaScript, HTML, CSS, Mongoose, Express, Node.js, Heroku, my love of international literature
</p>
      <a  href="https://github.com/serrayon/project-1" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className="herokuTwo">Twitter clone</h3>
    <img src={project3} alt="Login page for Twitter clone" />
    <a href="https://teamtwitterga.herokuapp.com/">Heroku Link</a>
    <p>Built durring a 5 day sprint using Django and Python.  Achived full CRUD capabilities, lacking some main functionality that would be found on the Twitter platform, but for a 5 day sprint it was great to acomplish the basics.</p>
    <a href="https://github.com/serrayon/Twitter" >View Source</a>
  </article>
</div>
</section> 
    )
}

export default Projects;








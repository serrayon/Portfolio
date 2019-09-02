import React from 'react';

import project1 from './black_jack.png';
import project2 from './world.png';
import project3 from './twitter.png';

const Projects = () => {
    // console.log(this.props)
    return (
      <section id='projects'>
<h2>Projects</h2>

<div className="grid-wrapper articles">
  <article className="col-third">
  <h3>Project 0 &mdash; Black Jack</h3>
    <img src={project1} alt="Landing screen for game" />
    <div> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
      <a href="https://github.com/serrayon/Black-Jack" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className='herokuOne'>Project 1 &mdash; World of Literature</h3>
    <img src={project2} alt="Login page for World of Literature" />
    <div>
      <a href="https://worldofliteratureabcd.herokuapp.com/">Heroku Link</a>
      <p>Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.</p>
      <a  href="https://github.com/serrayon/project-1" >View Source</a>
    </div>
  </article>
  <article className="col-third">
  <h3 className="herokuTwo">Project 2 - Twitter clone</h3>
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








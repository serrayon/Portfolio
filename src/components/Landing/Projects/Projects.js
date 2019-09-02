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
    <img src={project1} alt="Landing screen for game" />
    <div>
      <h3>Project 0 &mdash; Black Jack</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
      <a href="https://github.com/serrayon/Black-Jack" >View Source</a>
    </div>
  </article>
  <article className="col-third">
    <img src={project2} alt="Login page for World of Literature" />
    <div>
      <h3 className='herokuOne'>Project 1 &mdash; World of Literature</h3>
      <a href="https://worldofliteratureabcd.herokuapp.com/">Heroku Link</a>
      <p>Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.</p>
      <a  href="https://github.com/serrayon/project-1" >View Source</a>
    </div>
  </article>
  <article className="col-third">
    <img src={project3} alt="Login page for Twitter clone" />
    <h3 className="herokuTwo">Project 2 - Twitter clone</h3>
    <a href="https://teamtwitterga.herokuapp.com/">Heroku Link</a>
    <p>Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?</p>
    <a href="https://github.com/serrayon/Twitter" >View Source</a>
  </article>
</div>
</section> 
    )
}

export default Projects;





// old

import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
     <section id="contact">
			  <div className="wrap">
			    <h2>Get in Touch</h2>
				  <form action="https://formspree.io/serrayon81@gmail.com" className="contact" method="POST">
					<input type="text" name="name" placeholder="Full Name" class="col-third" />
					<input type="email" name="_replyto" placeholder="Email" className="col-third" />
					<input type="text" placeholder="Subject" className="col-third" />
					<textarea name="name" id="" cols="30" rows="10" placeholder="Message"></textarea>
					<button type="submit" value="Send">Submit</button>
				  </form>
			  </div>
		  </section>
      {/* <div id="contact" className="card"> */}
        {/* <img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Akira-Remake-700x300.jpg" className="card" alt="contact info"/> */}
         <div id="contact" className="card-body">
           <h3 className="card-title">Octavio Serrano</h3>
           <p className="card-text">Contact me at : 415.690.9507</p>
           <a href='mailto:serrayon81@gmail.com' className="card-text">Email: serrayon81@gmail.com</a>
         </div>

      {/* </div> */}

    </>
  )
}

export default Contact;

{/* <div id="contact" className="wrap">
          <form className="contact">
            <input type="text" placeholder="Full Name" className="col-third" />
            <input type="email" placeholder="Email" className="col-third" />
            <input type="text" placeholder="Subject" className="col-third" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div> */}

         
import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div id="contact" className="card">
        <img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Akira-Remake-700x300.jpg" className="card" alt="contact info"/>
        <div id="contact" className="card-body">
          <h3 className="card-title">Octavio Serrano</h3>
          <p className="card-text">Contact me directly at : (415)690-9507 serrayon81@gmail.com</p>
        </div>

      </div>

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


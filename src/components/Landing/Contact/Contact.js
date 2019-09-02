import React from 'react';


const Contact = () => {
    return (
      
        <div id="contact" className="wrap">
          <form className="contact">
            <input type="text" placeholder="Full Name" className="col-third" />
            <input type="email" placeholder="Email" className="col-third" />
            <input type="text" placeholder="Subject" className="col-third" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
     
    )
}

export default Contact;



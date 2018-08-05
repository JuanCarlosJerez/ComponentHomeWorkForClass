import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div id="contact">
        <header>
            <h2>Contact Me!</h2>
        </header>
        <form>
            <h5>Feel free to drop a line</h5>
            <h3>Name</h3>
            <input type="text" name="name" placeholder="Your Name Here"/>
            <h3>Phone Number</h3>
            <input type="text" name="phone" placeholder="XXX-XXX-XXXX"/>
            <h3>Email</h3>
            <input type="text" name="email" placeholder="email@email.com"/>
            <button type="button">Submit</button>
          </form>
      </div>
    )
  }
}

export default Contact;

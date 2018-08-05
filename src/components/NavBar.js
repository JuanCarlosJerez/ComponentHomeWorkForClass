import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
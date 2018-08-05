import React, { Component } from 'react';

class Social extends Component {
  render() {
    return(
      <div id="socialLinks">
        <p>Follow Me</p>
        <ul id="socialButton">
          <a href="https://twitter.com/">Twitter!</a>
          <a href="https://github.com/">GitHub!</a>
          <a href="https://LinkedIn.com/">LinkedIn!</a>
        </ul>
      </div>
    )
  }
}

export default Social;
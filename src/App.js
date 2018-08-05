import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Social from './components/SocialLinks';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      project: {},
  }
};

  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
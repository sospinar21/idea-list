import React, { Component } from 'react';
import './Tech.css';

class Main extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEv);
  }

  scrollEv = () => {
    const title = document.querySelector('.work-title');
    title.classList.add('moveDiv');
  }

  render() {
    return (
      <div className='tech-section'>
        <h1>Services</h1>
        <div className="tech-container" onScroll={this.scrollEv}>
        </div>
      </div>
    );
  }
}

export default Main;
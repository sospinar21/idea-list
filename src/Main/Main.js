import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main">
          <div className="menu-container">
            <div className="logo">
              <h2>Werkap</h2>
              <p>TECH HEROES</p>
            </div>
            <nav className='menu'>
              <li>Home</li>
              <li>Work</li>
              <li>Technologies</li>
              <li>Team</li>
            </nav>
          </div>
          <section className="description">
            <h1>We’re an App Design & Development Team</h1>
            <p>Experts in mobile & web technologies. We create beautiful, functional mobile apps and websites.</p>
            <button className='start'> Start a new Project</button>
          </section>
        </div>
        <div className="header">
          <div className='logos'>DayTrip</div>
          <div className='logos'>AWC</div>
          <div className='logos'>Rosenthal</div>
          <div className='logos'>BPC</div>
          <div className='logos'>qBott</div>
        </div>
      </div>
    );
  }
}

export default Main;
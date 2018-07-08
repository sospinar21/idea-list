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
            <h1>We believe in your ideas!</h1>
            <p>We're experts in mobile & web technologies. We create amazing, functional mobile apps and websites.</p>
            <button className='start'> Let's start</button>
          </section>
        </div>
        <div className="header">
          <div className='logos dayt'>DayTrip</div>
          <div className='logos awc'>AWC.dance</div>
          <div className='logos rosenthal'>Rosenthal</div>
          <div className='logos bpc'>Bellypassion</div>
          <div className='logos'>qBott</div>
        </div>
      </div>
    );
  }
}

export default Main;
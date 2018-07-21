import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import { configureAnchors } from 'react-scrollable-anchor';
import {Bgn} from '../Tech/bgn'

configureAnchors({offset: -60, scrollDuration: 600})


class Main extends Component {


  render() {
    return (
      <div className="main-container">
        <div className="main">
        <Bgn/>
          <section className="description">
            <h1>Build an Idea</h1>
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
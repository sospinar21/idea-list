import React, { Component } from 'react';
import './Tech.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import {RightBgn} from './bgn';

class Tech extends Component {


  render() {
    return (
      <ScrollableAnchor id={'section2'}>
        <div className='tech-section panel' id='tech' ref='services'> 
          <h1>Services</h1>
          <div className="tech-container" >
            <div className='mobile-row'>
              <div className='mob-pic'></div>
              <div className='mob-desc'>
                <h2 className='tech-title'>Mobile Apps</h2>
                <p className='tech-p'>We're experts on building Native Mobile apps for iOS & Android and Progessive web apps.</p>
                <b>cccccc</b>
              </div>
            </div>
            <div className='website-row'>
              <div className='web-desc'>
                <h2 className='tech-title'>Websites and Web Apps</h2>
                <p className='tech-p'>From websites, Web Apps and online stores, to marketing tools and analytics. </p>
                <b>qqqqq</b>
              </div>
              <div className='web-pic'></div>
            </div>
            <div className='portfolio-row'>
              <div className='portfolio-pic'></div>
              <div className='portfolio-desc'>
                <h2 className='tech-title'>Portfolios</h2>
                <p className='tech-p'>We build stunning and responsive personal sites that will make you stand out from the competition.</p>
                <b>cccccc</b>
              </div>
            </div>
            
          <RightBgn />
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Tech;
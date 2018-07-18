import React, { Component } from 'react';
import './Tech.css';
import ScrollableAnchor from 'react-scrollable-anchor'

class Tech extends Component {


  render() {
    return (
      <ScrollableAnchor id={'section2'}>
        <div className='tech-section panel' id='tech' ref='services'> 
          <h1>Services</h1>
          <div className="tech-container" >
            <div className='tech'>
              <i class="material-icons">mobile_screen_share</i>
              <p>Mobile Apps</p>
            </div>
            <div className='tech'>
              <i class="material-icons">desktop_windows</i>
              <p>Desktop Apps</p>e
            </div>
            <div className='tech'>
              <i class="material-icons">web</i>
              <p>Websites</p>
            </div>
            <div className='tech'>
              <i class="material-icons">business</i>
              <p>Small Business Apps</p>
            </div>
            <div className='tech'>
              <i class="material-icons">account_box</i>
              <p>Portfolios</p>
            </div>          
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Tech;
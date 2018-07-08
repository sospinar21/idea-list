import React, { Component } from 'react';
import './Footer.css';

class Main extends Component {
  render() {
    return (
      <div className="footer">
        <h2> Connect with us! </h2>
        <div className='icons'>
          <div className='icon face'/>
          <div className='icon insta'/>
          <div className='icon gh'/>
          <div className='icon linkedin'/>
          <div className='icon pint'/>
          <div className='icon twi'/>
          <div className='icon whatsapp'/>
          <div className='icon youtube'/>
        </div>
        <h3> www.werkap.com || contact@werkap.com || (303) 987 6789</h3>
      </div>
    );
  }
}

export default Main;
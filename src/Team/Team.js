import React, { Component } from 'react';
import './Team.css';

class Main extends Component {
  render() {
    return (
      <div className="team-container">
        <h1>Meet Our Team</h1>
        <section className='team-members'>
          <article className='team'>
            <div className='pic'></div>
            <div className='person-text'>
              <h2>Stephanie Ospina</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='team'>
            <div className='pic'></div>
            <div className='person-text'>
              <h2>Stephanie Ospina</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='team'>
            <div className='pic'></div>
            <div className='person-text'>
              <h2>Stephanie Ospina</h2>
              <p>Web application</p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Main;
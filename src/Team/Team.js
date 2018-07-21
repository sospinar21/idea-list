import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './Team.css';

class Main extends Component {
  render() {
    return (
      <ScrollableAnchor id={'section3'}>
        <div className="team-container panel" id='team'>
          <h1>Meet Our Team</h1>
          <section className='team-members'>
            <article className='team'>
              <div className='pic steph'></div>
              <div className='person-text'>
                <h2>Stephanie Ospina</h2>
                <p>As head of business, Stephanie leads business growth and go-to market efforts, including sales, marketing, business development, and customer operations. Before founding Werkap, Stephanie founded Bellypassion.</p>
              </div>
            </article>
            <article className='team'>
              <div className='pic tyler'></div>
              <div className='person-text'>
                <h2>Tyler</h2>
                <p>Results-driven, entrepreneurial, and innovative software developer with over 7 years of web development experience and online marketing management. A team player with a lifelong love of problem solving, design and technology.</p>
              </div>
            </article>
            <article className='team'>
              <div className='pic kai'></div>
              <div className='person-text'>
                <h2>Kai Harvey</h2>
                <p>Kai specializes in strategy and execution. Experience includes working in leading roles across the full business-to-technology spectrum. Combination of client skills, business sense, and tech fluency enable a strong ability to connect the dots and view day-to-day operations in the context of big-picture concepts.  </p>
              </div>
            </article>
          </section>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Main;
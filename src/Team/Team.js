import React, { Component } from 'react';
import './Team.css';

class Main extends Component {
  render() {
    return (
      <div className="team-container" id='team'>
        <h1>Meet Our Team</h1>
        <section className='team-members'>
          <article className='team'>
            <div className='pic steph'></div>
            <div className='person-text'>
              <h2>Princess Stephanie</h2>
              <p>Business oriented, tech driven software developer with a passion for designing and building solutions that make life easier for businesses and consumers. Over 10 years of entrepreneurial experience as Owner/Founder of Bogota’s 2nd largest dance academy (400+ students). Managed all aspects of small business logistics, from customer service and marketing to inventory management and accounting.</p>
            </div>
          </article>
          <article className='team'>
            <div className='pic tyler'></div>
            <div className='person-text'>
              <h2>Tyler loco</h2>
              <p>Results-driven, entrepreneurial, and innovative software developer with over 7 years of web development experience and online marketing management. A team player with a lifelong love of problem solving, design, and technology has led me to a career in my passion, programming.</p>
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
    );
  }
}

export default Main;
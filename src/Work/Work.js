import React, { Component } from 'react';
import './Work.css';

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
      <div className="work-container" onScroll={this.scrollEv}>
        <h1 className='work-title'>Our Latest Work</h1>
        <section className='projects'>
          <article className='project'>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project'>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project'>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project'>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project'>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project'>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>          
        </section>
      </div>
    );
  }
}

export default Main;
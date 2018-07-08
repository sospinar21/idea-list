import React, { Component } from 'react';
import './Work.css';
import Project from '../Project/Project';




class Main extends Component {
  constructor () {
    super ()

    this.state = {
      projectVisible: false
    }
  }

  displayProject = () => {
    console.log('here')
    this.setState({projectVisible:!this.state.projectVisible})
  }

  render() {

    if(this.state.projectVisible === true){
      return(
        <Project displayProject={this.displayProject}/>
      )
    }

    return (
      <div className="work-container" >
        <h1 className='work-title'>Our Latest Work</h1>
        <section className='projects'>
          <article className='project' onClick={this.displayProject}>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project' onClick={this.displayProject}>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project' onClick={this.displayProject}>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project' onClick={this.displayProject}>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project' onClick={this.displayProject}>
            <div className='photo'></div>
            <div className='project-text'>
              <h2>DayTrip</h2>
              <p>Web application</p>
            </div>
          </article>
          <article className='project' onClick={this.displayProject}>
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
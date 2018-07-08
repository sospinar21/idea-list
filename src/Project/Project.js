import React, { Component } from 'react';
import './Project.css';
import { Redux, ReactLogo, Firebase, Scss, Postgres, Aws } from '../Logos/Logos'


class Project extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='big-project'>
        <div className='project-section'>
        <div className='p-picture'></div>
        <div className='p-description'>
        <i class="material-icons right" onClick={this.props.displayProject}>close</i>
          <h1>Project</h1>
            <p>Landing page for the agency that presents different services</p>
          <h1>Process</h1>
            <p>The given design is a landing page of the agency website. The task was to create a unique, totally new vision of the service for the client. The website had to stand out from the similar ones, be noticeable and remarkable for a user. Inspired with the task, based on user research and market exploration, the designer decided to solve this task using color and shapes, searching for the perfect combination of this methods. </p>
          <h1>Tech Stack</h1>
            <div className='t-logos'>
              <Redux/>
              <ReactLogo />
              <Firebase />
              <Scss />
              <Postgres />
              <Aws />
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Project;
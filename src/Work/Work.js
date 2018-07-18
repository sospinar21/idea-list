import React, { Component } from 'react';
import './Work.css';
import ReactDOM from 'react-dom';
import Project from '../Project/Project';
import ScrollableAnchor from 'react-scrollable-anchor'




class Main extends Component {
  constructor () {
    super ()

    this.state = {
      projectVisible: false
    }
  }

  displayProject = () => {
    this.setState({projectVisible:!this.state.projectVisible})
  }

  render() {

    if(this.state.projectVisible === true){
      return(
        <div onLoad={() => this.refs.item.focus()}>
          <Project displayProject={this.displayProject}/>
        </div>
      )
    }

    return (
      <ScrollableAnchor id={'section1'}>
        <div className="work-container panel" id='work'>
          <h1 className='work-title'>Our Latest Work</h1>
          <p class="work-subtitle">Cras egestas varius posuere. Pellentesque hendrerit tempor auctor. Sed lacinia efficitur ornare. </p>
          <section className='projects'>
            <article className='mainProject' onClick={this.displayProject}>
              <div className='mainProjectText'>
                <h2>DayTrip</h2>
                <p>Web Application ></p>
              </div>
            </article>
            <article className='project project-1' onClick={this.displayProject}>
              <div className='project-text'>
                <h2>Evo-Lite</h2>
                <p>Website / Branding / Online Marketing</p>
                <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </div>
            </article>
            <article className='project project-2' onClick={this.displayProject}>
              <div className='project-text'>
                <h2>Viridis Design Studio</h2>
                <p>CMS Website</p>
                <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </div>
            </article>
            <article className='project  project-3' onClick={this.displayProject}>
              <div className='project-text'>
                <h2>AWC</h2>
                <p>Web application</p>
                <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </div>
            </article>        
          </section>
        </div>
        </ScrollableAnchor>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import Main from '../Main/Main';
import Work from '../Work/Work';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
import Tech from '../Tech/Tech';
import Menu from '../Menu/Menu';
import Project from '../Project/Project';

import './App.css';

class App extends Component {
  constructor () {
    super ()

    this.state = {
      projectVisible: false
    }
  }

  displayProject = () => {
    this.setState({projectVisible:!this.state.projectVisible})
  }

  componentDidMount() {
    const myNav = document.querySelector('.menu-container')
    window.onscroll = () => {
      if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
        myNav.classList.add("after");
      } else {
        myNav.classList.remove("after");
      }
    };
  }

  render() {

    if(this.state.projectVisible === true){
      return(
        <div className="App"id='app'>
          <Menu />
          <div onLoad={() => this.refs.item.focus()}>
            <Project displayProject={this.displayProject}/>
          </div>
        </div>
      )
    }

    else {
      return (
        <div className="App"id='app'>
          <Menu />
          <Main />
          <Work displayProject={this.displayProject}/>
          <Tech />
          <Team />
          <Footer />
          <div className='menu-bottom'>
            <div className="copy">
              <p>© 2018 Werkap, Tech Heroes.</p>
            </div>
            <div className='menu'>
            <h1 className='subscribe'>Subscribe to our newsletter:</h1>
              <div className='input-box'>
                <input placeholder='Enter Your Email Address'/>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;

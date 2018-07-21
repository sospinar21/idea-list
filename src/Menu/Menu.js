import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -60, scrollDuration: 600})


class Menu extends Component {


  render() {
    return (
    <div className="menu-container">
      <div className="logo">
        <h2>Werkap</h2>
        <p>TECH HEROES</p>
      </div>
      <nav className='menu'>
        <a href='#'>Home</a>
        <a href='#section1'>Work</a>
        <a href='#section2'>Services</a>
        <a href='#section3'>Team</a>
      </nav>
    </div> 
    );
  }
}

export default Menu;
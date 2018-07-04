import React, { Component } from 'react';
import Main from '../Main/Main';
import Work from '../Work/Work';
import Team from '../Team/Team';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Work />
        <Team />
      </div>
    );
  }
}

export default App;

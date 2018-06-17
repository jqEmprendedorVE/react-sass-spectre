import React, { Component, Fragment } from 'react';
import './sass/spectre.css';
import './sass/spectre-icons.css';
import './sass/spectre-exp.css';
import Home from './scenes/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home/>
      </Fragment>
    );
  }
}

export default App;

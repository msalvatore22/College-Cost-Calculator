import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

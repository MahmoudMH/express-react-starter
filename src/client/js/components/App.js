import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hello from './Hello';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Hello} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

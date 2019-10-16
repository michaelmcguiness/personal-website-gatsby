import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Components/HomePage';
import About from './Components/About';
import Essays from './Components/Essays';
import NavBar from './Components/NavBar';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/essays" component={Essays} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

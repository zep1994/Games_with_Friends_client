import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css';
import Navbar from '../components/Navbar'
import bootstrap from 'react-bootstrap'
import Home from '../components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' comoponent={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

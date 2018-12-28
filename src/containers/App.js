import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css';
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Games from './Games'
import GamesShow from './GamesShow';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/games' component={Games} />
            <Route exact path = '/games/:id' component={GamesShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

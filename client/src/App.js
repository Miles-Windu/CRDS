import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Register from "./components/Register/Register.js"
import User from "./components/User/User";
import Network from './components/Network/Network.js';
import Landing from "./components/Landing/Landing.js";
import Card from "./components/BusinessCard/Card";

class App extends Component {

  render(){
    return <div>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route path="/user" component={User} />
          <Route path="/network" component={Network} />
          <Route path="/register" component={Register} />
        </Router>
    </div>
  }
    
    
}

export default App;

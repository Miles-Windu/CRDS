import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./components/Register/Register.js";
import User from "./components/User/User";
import Network from './components/Network/Network.js';
import fullprofile from './components/FullProfile/fullprofile.js';
import Landing from "./components/Landing/Landing"
import Login from './components/Login/Login.js';
import Public from './components/Public/public.js'


class App extends Component {

  render(){
    return <div>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path ="/login" component={Login} />
        <Route path="/user" component={User} />
        <Route path="/network" component={Network} />
        <Route path="/register" component={Register} />
        <Route path="/profile/:id" component={fullprofile} />
        <Route path="/public" component={Public} />
      </Router>
    </div>
  }
    
    
}

export default App;

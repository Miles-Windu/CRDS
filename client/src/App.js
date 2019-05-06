import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./components/Register/Register.js"
import User from "./components/User/User";
import Network from './components/Network/Network.js';
import Landing from "./components/Landing/Landing.js"

function App() {

    return <div>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/user" component={User} />
        <Route path="/network" component={Network} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
    
}

export default App;

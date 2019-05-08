import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Register from "./components/Register/Register.js"
import User from "./components/User/User";
import Network from './components/Network/Network.js';
import Landing from "./components/Landing/Landing.js"
import fullprofile from './components/FullProfile/fullprofile.js';

function App() {

    return <div>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/user" component={User} />
        <Route path="/network" component={Network} />
        <Route path="/register" component={Register} />
        <Route path="/fullprofile" component={fullprofile} />
      </Router>
    </div>
    
}

export default App;

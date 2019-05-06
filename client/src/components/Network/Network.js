import React, {Component} from "react";
import "../css/network.css";
import Image from "../images/Crds_white.png";

class Network extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div className="container justify-content-center">
                <a href="/" className="pull-left"><img alt="" src={Image} /></a>  
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" id="myBtn" href="/user/network">My Networks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="myBtn" href="/user">Edit My CRDS</a>
                                </li>
                            </ul>
                        <ul className="nav navbar-nav flex-fill  justify-content-end">
                            <div className="login">
                                <li className="nav-item">
                                    <button id="myBtn" type="button" className="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/" tabindex="-1"> Logout </button>
                                </li>
                            </div>
                        </ul>
                    </div>
            </div>
            </div>
       </nav> 
        );
    }
}

export default Network
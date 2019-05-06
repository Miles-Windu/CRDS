import React, {Component} from "react";
import "react-bootstrap";
import "../css/register.css";
import CRDS from "../images/Crds_white.png";
// import "./index";
import floatingCards from "../images/floating-diagonal.png"

class Register extends Component {

    render(){
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
         <div className="container justify-content-center">
             <a href="/" className="pull-left"><img alt="" src={CRDS} /></a>  
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="myNavbar">
                     <ul className="nav navbar-nav flex-fill  justify-content-end">
                         <div className="login">
                             <li className="nav-item">
                                 <button id="myBtn" type="button" className="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/user" tabindex="-1"> Login </button>
                             </li>
                         </div>
                     </ul>
                 </div>
         </div>
    </nav> 
    <br />
    <br />
    <br />
    <br />
    <form id="register">
        <div className="row justify-content-center align-items-center">      
            <div className="card col-lg-4 mx-auto ">
                <br />
                <h5 className="text-center">Register For an Account</h5>
                <div className="form-group">
                    {/* Name */}
                    <label for="nameInput">Name</label>
                    <input type="name" className="form-control" id="nameInput" aria-describedby="emailHelp" placeholder="Full Name" required/>
                    {/* <!-- EMAIL --> */}
                    <label for="emailInput">Email</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    {/* <!-- PASSWORD --> */}
                    <label for="passwordInput">Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" required/>
                    {/* <!-- SUBMIT --> */}
                    <br />
                    <button type="submit" id="submit-btn" className="btn btn-primary">Submit</button>
                </div>       
            </div>
            {/* <!-- Trigger/Open The Modal --> */}
            {/* <!-- <button id="myBtn">Open Modal</button> --> */}

            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal row justify-content-center align-items-center">
                {/* <!-- Modal content --> */}
                <div className="modal-content card col-lg-4 mx-auto">
                    <span className="close text-right">X</span>
                    <h3 className="text-center">Log In</h3>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <a href="/user" type="login" className="btn btn-primary">Login</a>
                </div>
            </div>
        </div>
    </form>

    {/* <!-- PNG FLOATING CARDS --> */}
        <div id="lp-pom-image-1">
            <img className="float-right" src={floatingCards} alt="floating-diagonal"/>
        </div>
            
            </div>
        );
    }
}

export default Register
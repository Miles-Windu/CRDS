import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import "react-bootstrap";
import "../css/register.css";
import CRDS from "../images/Crds_white.png";
// import "./index";
import floatingCards from "../images/floating-diagonal.png";
import axios from "axios";
// const userCtrl = require("../controller/user")

class Register extends Component {
   
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            email: '',
            password: '',
            isDeleted: false,
            redirect: false
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            isDeleted: false
        }

        axios.post('http://localhost:3000/api/users', newUser)
            .then(res => console.log(res.data))
            // .then(res => res.redirect('/login'))
        
        this.setState({
            name: '',
            email: '',
            password: '',
            isDeleted: false,
            redirect: true 
        })
    }

    render(){
        
        if(this.state.redirect){
            return <Redirect to="/login" />
        }

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
{/* data-target="#myModal" data-toggle="modal" */} <a id="myBtn" role="button" href="/login" className="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 "> Login </a>
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
    <form id="register" action="/users" method="POST">
        <div className="row justify-content-center align-items-center">      
            <div className="card col-lg-4 mx-auto ">
                <br />
                <h5 className="text-center">Register For an Account</h5>
                <div className="form-group">
                <form onSubmit={this.onSubmit} action="/api/uers/add" method="POST">
                    {/* Name */}
                    <label  for="nameInput">Name</label>
                    <input onChange={this.onChangeName} value={this.state.name} className="form-control"  id="nameInput" aria-describedby="emailHelp" placeholder="Full Name" required/>
                    {/* <!-- EMAIL --> */}
                    <label for="emailInput">Email</label>
                    <input onChange={this.onChangeEmail} value={this.state.email} className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" required/>
                    {/* <!-- PASSWORD --> */}
                    <label for="passwordInput">Password</label>
                    <input onChange={this.onChangePassword} value={this.state.password} type="password" className="form-control"  placeholder="Password" required />
                    {/* <!-- SUBMIT --> */}
                    <br />
                    <button type="submit" id="submit-btn" className="btn btn-primary">Submit</button>
                </form>
                </div>       
            </div>
        </div>
    </form>

    {/* <!-- Trigger/Open The Modal --> */}
            {/* <!-- <button id="myBtn">Open Modal</button> --> */}

            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal fade row justify-content-center align-items-center">
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

    {/* <!-- PNG FLOATING CARDS --> */}
        <div id="lp-pom-image-1">
            <img className="float-right" src={floatingCards} alt="floating-diagonal"/>
        </div>
            
            </div>
        );
    }
}

export default Register
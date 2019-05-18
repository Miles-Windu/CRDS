import React, {Component} from "react";
import "react-bootstrap";
import "../css/register.css";
import CRDS from "../images/Crds_white.png";
// import "./index";
import floatingCards from "../images/floating-diagonal.png";
import axios from "axios";


class Login extends Component {
   
    constructor(props){
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            password: '',
            id: ''
        }
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

        const loginPost = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:1993/api/users/login', loginPost)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUSer({
                        loggedIn: true,
                        email: response.data.email
                    })
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: \n' + error)
            })
        

        this.setState({
            email: '',
            password: '',
            id: ''
        })
    }

    
    render(){
        
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
         <div className="container justify-content-center">
             <a href="/" className="pull-left"><img alt="" src={CRDS} /></a>  
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
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
                <h5 className="text-center">Login Here!</h5>
                <div className="form-group">
                <form onSubmit={this.onSubmit}>
                    <label for="emailInput">Email</label>
                    <input onChange={this.onChangeEmail} value={this.state.email} className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" required/>
                    {/* <!-- PASSWORD --> */}
                    <label for="passwordInput">Password</label>
                    <input onChange={this.onChangePassword} value={this.state.password} type="password" className="form-control"  placeholder="Password" required />
                    {/* <!-- SUBMIT --> */}
                    <br />
                    <button className="btn btn-primary">Login</button>

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

export default Login
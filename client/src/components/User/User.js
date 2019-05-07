import React, {Component} from "react";
import "../css/user.css";
import CRDS from "../images/Crds_white.png"
import Placeholder from "../images/image-placeholder.png"


class User extends Component {



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
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" id="myBtn" href="/network">My Networks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="myBtn" href="/user">Edit My CRDS</a>
                            </li>
                         </ul>
                    <ul className="nav navbar-nav flex-fill  justify-content-end">
                        <div className="login">
                            <li className="nav-item">
                                <button id="myBtn" type="button" className="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/user" tabindex="-1"> Logout </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </nav> 
    
    {/* <!-- CREATE BUSINESS CARD FORM --> */}
    <div className="container justify-content-center">
        <div className="form-group card">
                <h3 className="text-center">Create a Business Card</h3>
                {/* <!-- USER PHOTO UPLOAD --> */}
                <div className="user-photo text-center">
                    <form className="mx-auto">
                        <img src={Placeholder} alt="Place Holder" height="200" width="200"/>
                        <div className="text-center" >
                            <label for="userPhoto">Upload User Photo</label>
                            <input type="file" className="form-control-file content-center" id="userPhoto" />
                        </div>
                    </form>
                </div>
                {/* <!-- INPUT FIELDS --> */}
            <div className="container">
                {/* <!-- NAME --> */}
                <label for="nameInput">Name</label>
                <input type="name" className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Full Name" required />
                {/* <!-- EMAIL --> */}
                <label for="emailInput">Email address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" required />
                {/* <!-- PHONE --> */}
                <label for="phoneInput">Phone Number</label>
                <input type="tel" className="form-control" id="phoneInput" placeholder="3121112233" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                {/* <!-- POSITION TITLE --> */}
                <label for="titleInput">Title</label>
                <input type="text" className="form-control" id="titleInput" placeholder="Example: Web developer, UX/UI, Graphic Designer" required placeholderTextColor/>
                {/* <!-- CATEGORY --> */}
                <label for="titleInput">Category</label>
                <select className="form-control" id="sel1" required>
                        <option>Web/Technology</option>
                        <option>Media/Marketing</option>
                        <option>Household</option>
                        <option>Law/Legal</option>
                        <option>Medical/Health</option>
                        <option>Accounting/Finance</option>
                        <option>Food/Service</option>
                      </select >
                {/* <!-- SKILLS --> */}
                <label for="skillInput">Skills</label>
                <input type="text" className="form-control" id="skillInput" placeholder="Example: JavaScript, MySQL, HTML..." required />
                {/* <!-- SUBMIT --> */}
                <a type="submit" href="/user/network" className="btn" color="green">Create your card</a>
               
            </div>
            <br />
        </div>
    </div>
            </div>
        );
    }
}

export default User
import React, {Component} from "react";
import "../css/fullprofile.css";
import Image from "../images/Crds_white.png";
import image2 from "../images/Crds_black.png";

class fullprofile extends Component {

    render(){
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div className="container justify-content-center">
                <a href="/" className="pull-left"><img src={Image} alt="" /></a>  
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


        {/* <!-- MY NETWORKS --> */}

       <br />
       <div className="container overflow-auto justify-content-center container-fluid">
           <div className="card">
            <br />
            <div className="row">
               
                {/* <!-- CARD CONTAINER--> */}
                <div className="col-lg-12">
                    <div className="overflow-auto">
                            <div className="row">
                            {/* INSERT CARDS HERE ***************************************************/}
                                {/* <!-- CARD 1 DUMMY CARD --> */}
                                <div className=" col-lg-12 col-xl-12" id="user-card">
                                    <div className="card" style={{maxWidth: "600px"}}>
                                        <div className="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                        <br />
                                        <img className="align-center" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                        </div>
                                        <hr />
                                        <div className="card-content">
                                            {/* NAME */}
                                            <h3 className=" grey-text text-darken-4" id="name">Ferat Imrak</h3>
                                            {/* TITLE */}
                                            <p className="card-title" id="title">Full-Stack Web developer</p>
                                            {/* SKILLSETS */}
                                            <h7 className="h7"> Skill set: </h7>
                                                <ul>
                                                    <li id="skill1">
                                                    <p>HTML</p>
                                                    </li>
                                                    <li id="skill2">
                                                    <p>CSS</p>
                                                    </li>
                                                    <li id="skill3">
                                                    <p>Javascript</p>
                                                    </li>
                                                    <li id="skill4">
                                                    <p>Node.js</p>
                                                    </li>
                                                    <li id="skill5">
                                                    <p>React.js</p>
                                                    </li>
                                                </ul>
                                            {/* PHONE */}
                                            <h7 className="h7"> Phone Number: </h7>
                                            <p className="card-text" id="phone"> 1 (708) 123-4567</p>
                                            {/* ADDRESS */}
                                            <h7 className="h7"> Address: </h7>
                                            <p className="card-text" id="address"> 405 Church St, Evanston, IL 60201</p>
                                            {/* WEB LINK */}
                                            <h7 className="h7" id="website"> Website(s): </h7>
                                            <ul>
                                                <li>
                                                <a href="https://github.com/jiro1/Project-3">github</a>
                                                </li>
                                                <li>
                                                <a href="https://github.com/jiro1/Project-3">portfolio</a>
                                                </li>
                                                <li>
                                                <a href="https://github.com/jiro1/Project-3">company</a>
                                                </li>
                                            </ul>
                                            {/* SHARE */}
                                            <p></p>
                                            <h7 className="h7"> Sharing Options: </h7>
                                            <div class="addthis_inline_share_toolbox_e8kh"></div>

                                        </div>
                                          
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
        );
    }
}

export default fullprofile
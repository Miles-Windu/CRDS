import React, {Component} from "react";
import "../css/network.css";
import Image from "../images/Crds_white.png";
import image2 from "../images/Crds_black.png";
import Web from "./Categories/Web_Technology";
import Construction from "./Categories/Construction";
import Legal from "./Categories/Legal";
import Medical from "./Categories/Medical";
import Finance from "./Categories/Finance";
import Food from "./Categories/Food_Service";
import Media from "./Categories/Media_Marketing";

class Network extends Component {

    render(){
        return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div className="container justify-content-center">
                <a href="/" className="pull-left"><img src={Image} alt="" /></a>  
                    <a className="navbar-toggler" type="a" href="..." data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </a>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" id="myBtn" href="/network">My Networks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="myBtn" href="/user/update/">Edit My CRDS</a>
                                </li>
                            </ul>
                        <ul className="nav navbar-nav flex-fill  justify-content-end">
                            <div className="login">
                                <li className="nav-item">
                                    <a id="myBtn" type="a" className="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/" tabindex="-1"> Logout </a>
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
                {/* <!-- CATEGORY NAV --> */}
                <div className="col-sm-3">
                <div id="list-example" className="list-group">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">Web/Technology</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Media/Marketing</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Household</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Law/Legal</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-5">Medical/Health</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-6">Accounting/Finance</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-7">Food/Service</a>
                    </div>
                </div>
                {/* <!-- CARD CONTAINER--> */}
                <div className="col-sm-9">
                    <div className="overflow-auto">
                        <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy">
                           {/* Web/Technology category */} <Web />
                            <div className="row">
                            {/* INSERT CARDS HERE ***************************************************/}
                                {/* <!-- CARD 1 DUMMY CARD --> */}
                                <div className=" col-lg-4 col-xl-6" id="user-card">
                                    <div className="card" style={{maxWidth: "600px"}}>
                                        <div className="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                        <br />
                                        <img className="activator" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                        </div>
                                        <hr />
                                        <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Ferat Imrak</span>
                                        <p>Full-Stack Web developer</p>
                                        <a className="btn btn-info btn-lg" href="/fullprofile" role="button">See Full Profile</a>
                                        </div>
                                        {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                        <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Ferat Imrak<i className="material-icons right">close</i></span>
                                            <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                            </small></p>
                                            <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                                            <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                                            <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                            {/* SHARE */}
                                            <p>SHARING OPTIONS BELOW:</p>
                                            <div class="addthis_inline_share_toolbox_e8kh"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- CARD 2 DUMMY CARD --> */}
                                <div className=" col-lg-4 col-xl-6" id="user-card">
                                    <div className="card" style={{maxWidth: "600px"}}>
                                        <div className="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                        <br />
                                        <img className="activator" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                        </div>
                                        <hr />
                                         <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Diego M.S</span>
                                        <p>React and API Specialist</p>
                                        <a className="btn btn-info btn-lg" href="/fullprofile" role="button">See Full Profile</a>
                                        </div>
                                        {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                        <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Diego M.S<i className="material-icons right">close</i></span>
                                            <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                            </small></p>
                                            <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                                            <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                                            <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                            {/* SHARE */}
                                            <p>SHARING OPTIONS BELOW:</p>
                                            <div class="addthis_inline_share_toolbox_e8kh"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- CARD 3 DUMMY CARD --> */}
                                <div className=" col-lg-4 col-xl-6" id="user-card">
                                    <div className="card" style={{maxWidth: "600px"}}>
                                        <div className="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                        <br />
                                        <img className="activator" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                        </div>
                                        <hr />
                                        <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Miles Windu</span>
                                        <p>Jedi and React Master</p>
                                        <a className="btn btn-info btn-lg" href="/fullprofile" role="button">See Full Profile</a>
                                        </div>
                                        {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                        <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Miles Windu<i className="material-icons right">close</i></span>
                                            <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                            </small></p>
                                            <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                                            <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                                            <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                            {/* SHARE */}
                                            <p>SHARING OPTIONS BELOW:</p>
                                            <div class="addthis_inline_share_toolbox_e8kh"></div>
                                            </div>
                                        </div>
                                    </div>
                                <div> 

                             <Media />
                             
                            <div className="row">
                            {/* INSERT CARDS HERE ***************************************************/}
                                {/* <!-- CARD 3 DUMMY CARD --> */}
                                <div className=" col-lg-4 col-xl-6" id="user-card">
                                <div className="card" style={{maxWidth: "600px"}}>
                                    <div className="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                    <br />
                                    <img className="activator" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                    </div>
                                    <hr />
                                    <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Estevan Cruz</span>
                                    <p>Photographer and Social Media Specialist</p>
                                    <a className="btn btn-info btn-lg" href="/fullprofile" role="button">See Full Profile</a>
                                    </div>
                                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                    <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Estevan Cruz<i className="material-icons right">close</i></span>
                                        <p className="card-text"><small className="text-muted">Skilled in Lifestyle, e-commerce, and event-based photography</small></p>
                                        <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                                        <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                                        <p className="card-text"> I also run social media accounts and do social media take-over's</p>
                                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                         {/* SHARE */}
                                         <p>SHARING OPTIONS BELOW:</p>
                                        <div class="addthis_inline_share_toolbox_e8kh"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Construction />
                            
                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>

                             <Legal />

                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>

                             <Medical />

                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>

                             <Finance />

                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>
                            <Food />

                            <div className="row">
                                 {/* INSERT CARDS HERE ****************************************************/}
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

export default Network
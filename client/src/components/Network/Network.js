import React, {Component} from "react";
import { Helmet } from "react-helmet";
import { FacebookShareButton } from "react-share";
import "../css/network.css";
import Image from "../images/Crds_white.png";
import image2 from "../images/Crds_black.png";

class Network extends Component {
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
                                    <a className="nav-link" id="myBtn" href="/user">My Networks</a>
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
                            {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-1">Web/Technology</h3>
                            {/* <!-- CATEGORY CAPTION --> */}
                            <p>Consists of Web Developers, Software developers and those proficient in coding/logic</p>
                            {/* <!-- CARD 1 DUMMY CARD --> */}
                            <div className="row">
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
                                    </div>
                                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                    <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Ferat Imrak<i className="material-icons right">close</i></span>
                                        <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                        </small></p>
                                        <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                                        <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                        
                                        
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
                                    </div>
                                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                    <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Diego M.S<i className="material-icons right">close</i></span>
                                        <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                        </small></p>
                                        <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                                        <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
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
                                    </div>
                                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                    <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Miles Windu<i className="material-icons right">close</i></span>
                                        <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                        </small></p>
                                        <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                                        <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                        </div>
                                    </div>
                                </div>
                            <div> 
                            {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-1">Household/Carpentry</h3>
                            <p> Anywhere from Carpentry to interior design projects and home rennovation. Have a small moving business? or something similar to 1800-GOT-JUNK</p>
                            {/* INSERT CARDS HERE */}

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-4">Law/Legal</h3>
                            <p> Legal advice is always needed, but legal advice from a mutual friend/contact is guaranteed more helpful than getting billed by the minute to talk to a big lawfirm</p>
                            {/* INSERT CARDS HERE */}

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-5">Medical/Health</h3>
                            <p> Medical advice? or Freelance medical specialists? Having a contact in the field of medicie is almost like having an on-demand PubMed </p>
                            {/* INSERT CARDS HERE */}

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-6">Accounting/Finance</h3>
                            <p> Taxes.. and financial responsibity is tough, make it easier by sharing your CPA's info with other's to help out </p>
                            {/* INSERT CARDS HERE */}

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-7">Food/Service</h3>
                            <p> Having restaruant contact's is important! Especially for corporate catering and events! </p>
                            {/* INSERT CARDS HERE */}

                        
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
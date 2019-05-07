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
            <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div class="container justify-content-center">
                <a href="/" class="pull-left"><img src={Image} alt="" /></a>  
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" id="myBtn" href="/user">My Networks</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="myBtn" href="/user">Edit My CRDS</a>
                                </li>
                            </ul>
                        <ul class="nav navbar-nav flex-fill  justify-content-end">
                            <div class="login">
                                <li class="nav-item">
                                    <button id="myBtn" type="button" class="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/user" tabindex="-1"> Logout </button>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
       </nav> 


        {/* <!-- MY NETWORKS --> */}

       
       <br />
       <div class="container overflow-auto justify-content-center container-fluid">
           <div class="card">
            <br />
            <div class="row">
                {/* <!-- CATEGORY NAV --> */}
                <div class="col-sm-3">
                <div id="list-example" class="list-group">
                        <a class="list-group-item list-group-item-action" href="#list-item-1">Web/Technology</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-2">Media/Marketing</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-3">Household</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-4">Law/Legal</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-5">Medical/Health</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-6">Accounting/Finance</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-7">Food/Service</a>
                    </div>
                </div>
                {/* <!-- CARD CONTAINER--> */}
                <div class="col-sm-9">
                    <div class="overflow-auto">
                        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy">
                            {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-1">Web/Technology</h3>
                            {/* <!-- CATEGORY CAPTION --> */}
                            <p>Consists of Web Developers, Software developers and those proficient in coding/logic</p>
                            {/* <!-- CARD 1 DUMMY CARD --> */}
                            <div class="row">
                            <div class=" col-lg-4 col-xl-6" id="user-card">
                                <div class="card" style={{maxWidth: "600px"}}>
                                    <div class="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                    <br />
                                    <img class="activator" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                    </div>
                                    <hr />
                                    <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">Ferat Imrak</span>
                                    <p>Full-Stack Web developer</p>
                                    </div>
                                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                    <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">John Doe<i class="material-icons right">close</i></span>
                                        <p class="card-text"><small class="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                        </small></p>
                                        <p class="card-text"> Phone Number: 1 (708) 123-4567</p>
                                        <p class="card-text"> 405 Church St, Evanston, IL 60201</p>
                                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                        
                                        
                                        <div class="addthis_inline_share_toolbox_e8kh"></div>
            
						
            
                                    </div>
                                </div>
                            </div>
                            {/* <!-- CARD 2 DUMMY CARD --> */}
                            <div class=" col-lg-4 col-xl-6" id="user-card">
                                <div class="card" style={{maxWidth: "600px"}}>
                                    <div class="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                    <br />
                                    <img class="activator" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                    </div>
                                    <hr />
                                    <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">Diego M.S</span>
                                    <p>React and API Specialist</p>
                                    </div>
                                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                    <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">John Doe<i class="material-icons right">close</i></span>
                                        <p class="card-text"><small class="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                        </small></p>
                                        <p class="card-text"> Phone Number: 1 (708) 123-4567</p>
                                        <p class="card-text"> 405 Church St, Evanston, IL 60201</p>
                                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- CARD 3 DUMMY CARD --> */}
                            <div class=" col-lg-4 col-xl-6" id="user-card">
                                <div class="card" style={{maxWidth: "600px"}}>
                                    <div class="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                                    <br />
                                    <img class="activator" src={image2} alt="" style={{width: "100px", height: "100px"}} />
                                    </div>
                                    <hr />
                                    <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">Miles Windu</span>
                                    <p>Jedi and React Master</p>
                                    </div>
                                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                                    <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">John Doe<i class="material-icons right">close</i></span>
                                        <p class="card-text"><small class="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                                        </small></p>
                                        <p class="card-text"> Phone Number: 1 (708) 123-4567</p>
                                        <p class="card-text"> 405 Church St, Evanston, IL 60201</p>
                                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                                        </div>
                                    </div>
                                </div>
                            <div>  
                            <p> Anywhere from Carpentry to interior design projects and home rennovation. Have a small moving business? or something similar to 1800-GOT-JUNK</p>
                            <h3 id="list-item-4">Law/Legal</h3>
                            <p> Legal advice is always needed, but legal advice from a mutual friend/contact is guaranteed more helpful than getting billed by the minute to talk to a big lawfirm</p>
                            <h3 id="list-item-5">Medical/Health</h3>
                            <p> Medical advice? or Freelance medical specialists? Having a contact in the field of medicie is almost like having an on-demand PubMed </p>
                            <h3 id="list-item-6">Accounting/Finance</h3>
                            <p> Taxes.. and financial responsibity is tough, make it easier by sharing your CPA's info with other's to help out </p>
                            <h3 id="list-item-7">Food/Service</h3>
                            <p> Having restaruant contact's is important! Especially for corporate catering and events! </p>
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
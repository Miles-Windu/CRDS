import React, {Component} from "react";
import "../css/fullprofile.css";
import Image from "../images/Crds_white.png";
import image2 from "../images/Crds_black.png";

function fullprofile (props) {
    
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
                                <a className="nav-link" id="myBtn" href="/public">Public Network</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="myBtn" href="/user">Edit My CRDS</a>
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
            
            {/* <!-- CARD CONTAINER--> */}
            <div className="col-lg-12">
                <div className="overflow-auto">
                        <div className="row">
                        {/* INSERT CARDS HERE ***************************************************/}
                       
                            {/* DUMMY CARD 2 */}
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
                                        {/* ACCORDION DROP */}
                                            <div id="accordion">
                                            {/* SKILLSET DROP */}
                                                <h5 className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Skill set: 
                                                </h5>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div class="card-body">
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
                                                    </div>
                                                    </div>
                                            {/* PHONE  */}
                                                <h5 className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Phone:
                                                </h5>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        {props.phone}
                                                    </div>
                                                </div>
                                            {/* ADDRESS  */}
                                                <h5 className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Address:
                                                </h5>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                            405 Church St, Evanston, IL 60201
                                                    </div>
                                                </div>

                                                {/* WEBSITE */}
                                                <h5 className="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Website:
                                                </h5>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <a href="https://github.com/jiro1/Project-3">github</a>
                                                    </div>
                                                </div>
                                                {/* SHARING OPTIONS */}
                                                <h5 className="card-header" id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    Sharing Options:
                                                </h5>
                                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                                    <div className="card-body">
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
    </div>
</div>
</div>
        );
}

export default fullprofile
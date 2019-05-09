import React, {Component} from "react";
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
                                    <a id="myBtn" type="a" className="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/user" tabindex="-1"> Logout </a>
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
                            <p> Everyone with professional goals would like to expand their network because the theory is the larger your network, the greater your opportunities.
                                All successful startups forged meaningful relationships, which allowed for a fast and sustainable path to success.
                                Networking will give you more leverage with investors for your startup tech company.
                                {/* source: https://neilpatel.com/blog/how-can-networking-help-your-startup-grow/ */}
                            </p>
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

                             {/* <!-- CATEGORY TITLE --> */}
                             <h3 id="list-item-1">Media/Marketing</h3>
                            <p> But reaching out to people and building yes, a network, of contacts is going to be indispensable as you progress in your career, no matter where you work. 
                                When you work with clients, you need to deliver what you may see as inspired output and what others may see as a product. 
                                You have to navigate the waters of commerce and art when you produce creative content for people. </p>
                                {/* source: http://www.genfkd.org/networking-creative-careers */}
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

                            {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-1">Household/Carpentry</h3>
                            <p> Most builders and tradesmen have been invited to business breakfasts at some time or another. Very few attend.
                            Every builder likes to say they get a lot of referrals through word of mouth but most are reluctant to belong to a networking
                            organisation. Networking is word of mouth. It is the word of mouth of a much greater number of people than you can possibly work for.
                            {/* source: http://www.marketdoctor.co.uk/content/buildingexperts.html */}
                            </p>
                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-4">Law/Legal</h3>
                            <p> The recession and non-recovery have made finding that first job out of law school as challenging
                                 as ever—and that means networking with potential employers is as important as ever. When networking, “At some point in your conversation, 
                                 they may volunteer to have a longer conversation, or they may say, ‘Hey, send me your résumé, we’re looking for somebody,’”. - Susan C. Robinson
                                 {/* source: https://abaforlawstudents.com/2011/10/01/networking-as-important-as-ever-for-law-students/ */}
                                 </p>
                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-5">Medical/Health</h3>
                            <p> You’ve probably heard the saying “It’s not what you know, but who you know!”
                                 and this is certainly most evident when it comes to searching for your ideal job.
                                  In healthcare, because of the technical nature of the role, knowledge and education 
                                  are naturally necessary, but having connections to help get your foot in the door 
                                  definitely helps. </p>
                                  {/* source: https://www.verywellhealth.com/healthcare-networking-medical-career-1736039 */}
                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-6">Accounting/Finance</h3>
                            <p> Networking as a finance professional is mandatory for professional growth and leveraging industry
                                 knowledge. To network in finance is to build and maintain relationships. The connections help in
                                career management by presenting career growth opportunities, access to industry insider scoop, growth 
                                in technical knowledge, and more. </p>
                                {/* source: https://www.financewalk.com/how-to-network-finance/ */}
                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                            </div>

                             {/* <!-- CATEGORY TITLE --> */}
                            <h3 id="list-item-7">Food/Service</h3>
                            <p> By following up on leads and leveraging new contacts, our team has been able to harness incredible food 
                                and beverage talent, identify passionate and authentic spokespeople, initiate programs to expand the visibility 
                                and everyday use of honey on menus nationwide, and even ignite trends. </p>
                                {/* source: https://medium.com/eh-y-food-marketing-insights/harnessing-the-power-of-networking-for-foodservice-clients-e65dd7004f10 */}
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
import React, {Component} from "react";
import "../css/style.css";
import image from "../images/Crds_white.png";
import image2 from "../images/floating-cards.png";
import image3 from "../images/macbook-air-on-desk.jpg"; 
import image4 from "../images/Crds_black.png";
import image5 from "../images/icons8-circled-user-female-skin-type-6-96.png";
import image6 from "../images/icons8-circled-user-male-skin-type-3-96.png";
import image7 from "../images/icons8-circled-user-female-skin-type-5-96.png";
import image8 from "../images/icons8-circled-user-male-skin-type-5-96.png"; 

class Landing extends Component {
    render(){
        return (
    <div>
    {/* NAV BAR */}
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div className="container justify-content-center">
                <a href="/" className="pull-left"><img src={image} alt=""/></a>  
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#section1"> About Us <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section2"> Our Crds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section3"> Contact Us </a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav flex-fill  justify-content-end">
                            <div className="login">
                                <li className="nav-item">
                                    <button className="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/user" tabindex="-1"> Login </button>
                                </li>
                            </div>
                        </ul>
                    </div>
            </div>
        </nav> 

    {/* Jumbotron */}
    <div id="root">
        <div className="jumbotron">
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h1 className="display-4">Welcome to CRDS</h1>
                    <p className="lead">Lets make memorable connections</p>
                    
                        <p>We want to get rid of the distractions of "feeds" and spam messages that
                        are associated with social media. Entrust in putting your contact information on your business card
                        and not an online profile where your information is leaked to marketers and sales reps.
                        Connections and social networks without the Social Media</p>

                        <a className="btn btn-info btn-lg" href="/register" role="button">Sign Up!</a>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={image2} alt="floating-cards" />
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <br />

    {/* <!-- CONTAINER + ABOUT ME FEATURETTE--> */}
    <div id="section1">
        <div className="row">
            <div className="container justify-content-center">
            <div className="row featurette">
                <div className="col-lg-7 col-sm-12">
                    <h2 className="featurette-heading">
                        About Us!
                    </h2>
                    <p className="lead">
                        We are a group of Northwestern University Coding Bootcamp Students in a 
                        Full-Stack Web Developer Certification course. In this project, we aim to use
                        several technologies we learned over the past 6 months to demonstrate our skills
                        and create a portfolio-worth app to show to future employers. Hope you guys enjoy!
                        <br /> - The Connectors
                    </p>
                </div>
                <div className="col-lg-5 col-sm-12">
                   <img className="animation-element slide-left testimonial" src={image3} alt="macbook-on-desk.jpg" />
                </div>
            </div>
            </div>
        </div>
    </div>
    <hr id="section2" className="featurette-divider" />

    {/* <!-- CONTAINER + JOHN DOE CARD EXAMPLE --> */}
    <br />
    <div className="row">
        <div className="container justify-content-center">
            <div className="row featurette">
                <div className="col-lg-5 col-sm-12">
                    <div className="card mb-3" style={{maxwWdth: "540px"}}>
                        <div className="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                          <br />
                          <img className="activator" src={image4} alt="" style={{width: "150px", height: "100px"}} />
                        </div>
                        <hr />
                        <div className="card-content">
                          <span className="card-title activator grey-text text-darken-4">John Doe<small className="text-muted right">Click on the Logo!</small></span>
                          <p>Full-Stack Web developer</p>
                        </div>
                        <div className="card-reveal">
                          <span className="card-title grey-text text-darken-4">John Doe<i className="material-icons right">close</i></span>
                            <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                            </small></p>
                            <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                            <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                            <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                        </div>
                      </div>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <h2 className="featurette-heading">
                        Hello, John Doe
                    </h2>
                    <p className="lead">
                        While in our app you're able to view all your network cards 
                        Tap on a card to view more details, get access to links and share!
                        <br />
                        Fill in your preferred forms of contact, and share with those within your network.
                        No more random strangers contacting you by surprise.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- CONTAINER MARKETING - WHY'S --> */}
    <div id="marketing">
        <hr className="featurette-divider" />
        <div className="container marketing text-center justify-content-center">
            <div className="row text-center justify-content-center">
                <h2>How to use Crds</h2>
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <img src={image5} alt="female-profile" />
                    <title>Contractors</title>
                    <h3 className="marketing">Contractors</h3>
                    <p className="marketing">Outsource a freelancer for the special job! An important tool for freelancers
                       and contractors is to have a large network to sustain their business.</p>
                </div>
                <div className="col-lg-3">
                    <img src={image6} alt="profile-male" />
                    <title>Services</title>
                    <h3 className="marketing">Services</h3>
                    <p className="marketing">Share your small business contacts with others. Don't want to go through the internet for recommendations? 
                      word-of-mouth recommendations are always more valuable than just SEO, that geniuine sharing of contact information 
                      is beneficial for both parties.
                    </p>
                </div>
                <div className="col-lg-3">
                    <img src={image7} alt="female-profile" />
                    <h3 className="marketing">Leads</h3>
                    <p className="marketing">Generate Leads for projects, networking events lead most people with full pockets of varying business cards which
                      leads to you blending in with the rest and not recieving an actual follow-up post-networking.
                    </p>
                </div>
                <div className="col-lg-3">
                    <img src={image8} alt="male-profile" />
                    <h3 className="marketing">Careers</h3>
                    <p className="marketing">Expand the job search and make it easier for potential-future empolyers to
                      contact you right away! Make that follow-up easier.
                    </p>
                </div>
            </div>
        </div>
        <hr className="featurette-divider" />
    </div>

    {/* <!-- CONTACT --> */}
    <div id="section3" className="container">
        <div style={{textAlign: "center"}}>
            <h2>Contact Us</h2>
            <p>Leave us a message and lets share CRDS over some coffee!</p>
        </div>
        <div className="row">
            <div className="col-lg-7">
                <div id="map-container-google-11" className="z-depth map-container-2" >
                    <br />
                    <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" style={{border: "0"}} title="Google-Map" allowfullscreen></iframe>
                </div>
            </div>
            <div className="col-lg-5">
            <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "170px"}}></textarea>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    </div>
    
    {/* <!-- FOOTER --> */}
    <hr />
    <br />
    <footer className="container">
        <p> © 2019 The Connectors | Northwestern Coding BootCamp   <a id="github" href="https://github.com/jiro1/Project-3">Github</a> </p>
    </footer>
    <br></br>
            </div>
        );
    }
}

export default Landing
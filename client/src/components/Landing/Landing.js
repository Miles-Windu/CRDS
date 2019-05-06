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
            <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
        <div class="container justify-content-center">
            <a href="index.html" class="pull-left"><img src={image} alt=""/></a>  
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#section1"> About Us <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section2"> Our Crds</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section3"> Contact Us </a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav flex-fill  justify-content-end">
                        <div class="login">
                            <li class="nav-item">
                                <button class="btn btn-outline-info  my-2 my-sm-0 mr-sm-2 " href="/user" tabindex="-1"> Login </button>
                            </li>
                        </div>
                    </ul>
                </div>
        </div>
    </nav> 

    {/* Jumbotron */}
    
    <div id="root">
         <div class="container justify-content-center">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <h1 class="display-4">Welcome to CRDS</h1>
                  <p class="lead">Lets make memorable connections</p>
                  
                    <p>Connections and social networks without the Social Media</p>

                    <a class="btn btn-info btn-lg" href="/register" role="button">Sign Up!</a>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <img src={image2} alt="floating-cards" />
                </div>
            </div>
        </div>
        
    </div>
    <br />

    {/* <!-- CONTAINER + ABOUT ME FEATURETTE--> */}
    <div id="section1">
        <div class="row">
            <div class="container justify-content-center">
            <div class="row featurette">
                <div class="col-lg-7 col-sm-12">
                    <h2 class="featurette-heading">
                        About Us!
                    </h2>
                    <p class="lead">
                        We are a group of Northwestern University Coding Bootcamp Students in a 
                        Full-Stack Web Developer Certification course. In this project, we aim to use
                        several technologies we learned over the past 6 months to demonstrate our skills
                        and create a portfolio-worth app to show to future employers. Hope you guys enjoy!
                        <br /> - The Connectors
                    </p>
                </div>
                <div class="col-lg-5 col-sm-12">
                   <img class="animation-element slide-left testimonial" src={image3} alt="macbook-on-desk.jpg" />
                </div>
            </div>
            </div>
        </div>
    </div>
    <hr id="section2" class="featurette-divider" />

    {/* <!-- CONTAINER + JOHN DOE CARD EXAMPLE --> */}
    <br />
    <div class="row">
        <div class="container justify-content-center">
            <div class="row featurette">
                <div class="col-lg-5 col-sm-12">
                    <div class="card mb-3" style={{maxwWdth: "540px"}}>
                        <div class="col-md-4 justify-content-center card-image waves-effect waves-block waves-light">
                          <br />
                          <img class="activator" src={image4} alt="" style={{width: "150px", height: "100px"}} />
                        </div>
                        <hr />
                        <div class="card-content">
                          <span class="card-title activator grey-text text-darken-4">John Doe<small class="text-muted right">Click on the Logo!</small></span>
                          <p>Full-Stack Web developer</p>
                        </div>
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
                <div class="col-lg-7 col-sm-12">
                    <h2 class="featurette-heading">
                        Hello, John Doe
                    </h2>
                    <p class="lead">
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
        <hr class="featurette-divider" />
        <div class="container marketing text-center justify-content-center">
            <div class="row text-center justify-content-center">
                <h2>How to use Crds</h2>
            </div>

            <div class="row">
                <div class="col-lg-3">
                    <img src={image5} alt="female-profile" />
                    <title>Contractors</title>
                    <h3 class="marketing">Contractors</h3>
                    <p class="marketing">Outsource a freelancer for the special job! An important tool for freelancers
                       and contractors is to have a large network to sustain their business.</p>
                </div>
                <div class="col-lg-3">
                    <img src={image6} alt="profile-male" />
                    <title>Services</title>
                    <h3 class="marketing">Services</h3>
                    <p class="marketing">Share your small business contacts with others. Don't want to go through the internet for recommendations? 
                      word-of-mouth recommendations are always more valuable than just SEO, that geniuine sharing of contact information 
                      is beneficial for both parties.
                    </p>
                </div>
                <div class="col-lg-3">
                    <img src={image7} alt="female-profile" />
                    <h3 class="marketing">Leads</h3>
                    <p class="marketing">Generate Leads for projects, networking events lead most people with full pockets of varying business cards which
                      leads to you blending in with the rest and not recieving an actual follow-up post-networking.
                    </p>
                </div>
                <div class="col-lg-3">
                    <img src={image8} alt="male-profile" />
                    <h3 class="marketing">Careers</h3>
                    <p class="marketing">Expand the job search and make it easier for potential-future empolyers to
                      contact you right away! Make that follow-up easier.
                    </p>
                </div>
            </div>
        </div>
        <hr class="featurette-divider" />
    </div>

    {/* <!-- CONTACT --> */}

    <div id="section3" class="container">
        <div style={{textAlign: "center"}}>
            <h2>Contact Us</h2>
            <p>Leave us a message and lets share CRDS over some coffee!</p>
        </div>
        <div class="row">
            <div class="col-lg-7">
                <div id="map-container-google-11" class="z-depth map-container-2" >
                    <br />
                    <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" style={{border: "0"}} title="Google-Map" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-5">
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
    <footer class="container">
        <p> © 2019 The Connectors | Northwestern Coding BootCamp   <a id="github" href="https://github.com/jiro1/Project-3">Github</a> </p>
    </footer>
    <br></br>
            </div>
        );
    }
}

export default Landing
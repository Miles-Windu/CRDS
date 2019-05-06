import React from "react";
import image2 from "../images/Crds_black.png";

function Card(props) {
    return <div className="container">
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
                        <span className="card-title grey-text text-darken-4">John Doe<i className="material-icons right">close</i></span>
                        <p className="card-text"><small className="text-muted">Proficient in: HTML, CSS, Javascript, React.js, Node.js, mongoDB
                        </small></p>
                        <p className="card-text"> Phone Number: 1 (708) 123-4567</p>
                        <p className="card-text"> 405 Church St, Evanston, IL 60201</p>
                        <a href="https://github.com/jiro1/Project-3">Check out my website!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Card
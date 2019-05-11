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
                        <span className="card-title activator grey-text text-darken-4" valus={props.name} >{props.name}</span>
                        <p value={props.title}>{props.title}</p>
                    </div>
                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{props.name}
                        <i className="material-icons right">close</i></span>
                        <p className="card-text"><small className="text-muted">Proficient in: {props.skills}
                        </small></p>
                        <p className="card-text" > Phone Number: {props.phone}</p>
                        <p className="card-text"> {props.address}</p>
                        <a href={props.site}>{props.site}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Card
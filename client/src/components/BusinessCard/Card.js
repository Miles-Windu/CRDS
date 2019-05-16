import React from "react";
import image2 from "../images/Crds_black.png";

function Card(props) {

    return <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 col-xl-6" id="user-card">
                <div className="card" style={{maxWidth: "600px"}}>
                    <div className="col-md-4 justify-content-center card-image waves-effect waves-block waves-info">
                        <br />
                        <img className="activator" src={image2} alt="" style={{width: "75px", height: "75px"}} />
                    </div>
                    <div className="col-md-4 justify-content-right">
                    {/* <button className="btn btn-primary btn-lg btn-block" type="button" href="/fullprofile">View Full Profile</button> */}
                    </div>
                        <hr />
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4" value={props.name} >{props.name}</span>
                        <p value={props.title}>{props.title}</p>
                    </div>
                    {/* <!-- RESPONSIVE ASPECT OF CARD --> */}
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{props.name}
                        <i className="material-icons right">close</i></span>
                        <p className="card-text"><small className="text-muted">Proficient in: {props.skills.map(skill => {return <li>{skill}</li>})}
                        </small></p>
                        <p className="card-text" > Phone Number: <a href={props.phone} >{props.phone}</a></p>
                        {/* <p className="card-text" > Category: {props.category}</p> */}
                        <p className="card-text"> {props.address}</p>
                        <a className="waves-effect waves-light btn-small" href={`profile/${props.id}`}>View Full Profile</a>
                        <a href={props.site}>{props.site}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Card
import React from "react";
import image2 from "../images/Crds_black.png";

function PublicCard(props) {
    return <div className="card-deck col-lg-3">
        <div className="row">
            <div className=" col-lg-6 col-xl-12" id="user-card">
                <div className="card col-md-4" style={{maxWidth: "300px"}}>
                    <div className="col-md-3 justify-content-center card-image waves-effect waves-block waves-info">
                        <br />
                        <img className="activator" src={image2} alt="" style={{width: "50px", height: "50px"}} />
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
                        <p className="card-text" > Category: {props.category}</p>
                        <p className="card-text">Email: {props.email}</p>
                        <p className="card-text"> {props.address}</p>
                        {/* VIEW FULL PROFILE BUTTON */}
                        <a className="waves-effect waves-light btn-small" href={`profile/${props.id}`}>View Full Profile</a>
                        <hr></hr>
                        {/* ADD TO MY NETWORK */}
                        {/* <a class="btn-floating btn-large waves-effect waves-light red" href=" "><i class="material-icons">add</i></a>
                        <a href={props.site}>{props.site}</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PublicCard
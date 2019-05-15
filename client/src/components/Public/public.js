import React, {Component} from "react";
import "../css/network.css";
import Image from "../images/Crds_white.png";
import PublicCard from "../BusinessCard/publicCard"
import axios from "axios";

class Public extends Component {

    constructor(props){
        super(props)

        this.state = {
            crdInfo: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/crds')
            .then(response => {
                this.setState({
                    crdInfo: response.data
                });
            })
            .catch(function (error){
                console.log(error)
            })
    }

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
                                    <a className="nav-link" id="myBtn" href="/public">Public Network</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="myBtn" href="/user/update/">Edit My CRDS</a>
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
       <div className="overflow-auto justify-content-center container-fluid">
           <div className="card">
            <br />

            {/* SEARCH BAR */}
            <div className="row">
                <div className="col-sm-12 col-xl-12">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                </div>
            </div>

            <div className="card-deck">
             {/* <!-- CARD CONTAINER--> */}
                {this.state.crdInfo.map(crd => 
                    <PublicCard
                    key={crd.id}
                    name={crd.name} 
                    category={crd.category}
                    skills={crd.skills}
                    phone={crd.phone}
                    email={crd.email}
                    title={crd.title}
                    />
                    
                    )}
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default Public
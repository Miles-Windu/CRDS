import React, {Component} from "react";
import "../css/network.css";
import Image from "../images/Crds_white.png";
import Web from "./Categories/Web_Technology";
import Construction from "./Categories/Construction";
import Legal from "./Categories/Legal";
import Medical from "./Categories/Medical";
import Finance from "./Categories/Finance";
import Food from "./Categories/Food_Service";
import Media from "./Categories/Media_Marketing";
import Card from "../BusinessCard/Card";
import axios from "axios";

class Network extends Component {

    constructor(props){
        super(props)

        this.state = {
            crdInfo: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/crds')
            .then(response => {
                console.log(response.data)
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
                            <Web />
                            <div className="row">
                            {/* INSERT CARDS HERE ***************************************************/}

                            {this.state.crdInfo.filter((crd) => crd.category === 'Web/Technology').map(crd =>
                                    <Card 
                                    key={crd.id}
                                    name={crd.name}
                                    title={crd.title}
                                    skills={crd.skills.map(skill => skill.split(","))}
                                    phone={crd.phone}
                                    site={crd.site}
                                    address={crd.address}
                                    id={crd.id} />
                                )
                            }

                            </div>

                            <Media />

                            <div className="row">
                            {/* INSERT CARDS HERE ***************************************************/}
                            {this.state.crdInfo.filter((crd) => crd.category === 'Media/Marketing').map(crd =>
                                    <Card 
                                    key={crd.id}
                                    name={crd.name}
                                    title={crd.title}
                                    skills={crd.skills.map(skill => skill.split(","))}
                                    category={crd.category}
                                    phone={crd.phone}
                                    site={crd.site}
                                    address={crd.address}
                                    id={crd.id} />
                                )
                            }
                            </div>
                            
                            <Construction />
                            
                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                                 {this.state.crdInfo.filter((crd) => crd.category === 'Household').map(crd =>
                                    <Card 
                                    key={crd.id}
                                    name={crd.name}
                                    title={crd.title}
                                    skills={crd.skills.map(skill => skill.split(","))}
                                    phone={crd.phone}
                                    category={crd.category}
                                    site={crd.site}
                                    address={crd.address}
                                    id={crd.id} />
                                )
                            }
                            </div>

                             <Legal />

                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                                 {this.state.crdInfo.filter((crd) => crd.category === 'Law/Legal').map(crd =>
                                    <Card 
                                    key={crd.id}
                                    name={crd.name}
                                    title={crd.title}
                                    category={crd.category}
                                    skills={crd.skills.map(skill => skill.split(","))}
                                    phone={crd.phone}
                                    site={crd.site}
                                    address={crd.address}
                                    id={crd.id} />
                                )
                            }
                            </div>

                             <Medical />

                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                                 {this.state.crdInfo.filter((crd) => crd.category === 'Medical/Health').map(crd =>
                                    <Card 
                                    key={crd.id}
                                    name={crd.name}
                                    title={crd.title}
                                    category={crd.category}
                                    skills={crd.skills.map(skill => skill.split(","))}
                                    phone={crd.phone}
                                    site={crd.site}
                                    address={crd.address}
                                    id={crd.id} />
                                )
                            }
                            </div>

                             <Finance />

                            <div className="row">
                                 {/* INSERT CARDS HERE ***************************************************/}
                                 {this.state.crdInfo.filter((crd) => crd.category === 'Accounting/Finance').map(crd =>
                                    <Card 
                                    key={crd.id}
                                    name={crd.name}
                                    title={crd.title}
                                    category={crd.category}
                                    skills={crd.skills.map(skill => skill.split(","))}
                                    phone={crd.phone}
                                    site={crd.site}
                                    address={crd.address}
                                    id={crd.id} />
                                )
                            }
                            </div>
                            <Food />

                            <div className="row">
                                 {/* INSERT CARDS HERE ****************************************************/}
                                 {this.state.crdInfo.filter((crd) => crd.category === 'Food/Service').map(crd =>
                                    <Card 
                                    key={crd.id}
                                    name={crd.name}
                                    title={crd.title}
                                    category={crd.category}
                                    skills={crd.skills.map(skill => skill.split(","))}
                                    phone={crd.phone}
                                    site={crd.site}
                                    address={crd.address}
                                    id={crd.id} />
                                )
                            }
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
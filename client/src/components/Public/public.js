import React, {Component} from "react";
import "../css/network.css";
import Image from "../images/Crds_white.png";
import PublicCard from "../BusinessCard/publicCard"
import axios from "axios";

class Public extends Component {

    constructor(props){
        super(props)

        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            search: '',
            crdInfo: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1993/api/crds')
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

    handleChangeSearch(e){
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()

        let name = this.state.search
        console.log(name)
        axios.get(`http://localhost:1993/api/crds/?name=${name}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    crdInfo: response.data.filter((item) => item.name === name)
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
                                    <a className="nav-link" id="myBtn" href="/user/create">Create New CRDS</a>
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
                <form onSubmit={this.handleSubmit}>
                    <div className="col-sm-12 col-xl-12">
                        <input ctype="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"value={this.state.search} onChange={this.handleChangeSearch} />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <br />

            <div className="card-deck mx-auto my-auto">
             {/* <!-- CARD CONTAINER--> */}
                {this.state.crdInfo.map(crd => 
                    <PublicCard
                    key={crd._id}
                    name={crd.name} 
                    category={crd.category}
                    skills={crd.skills.map(skill => skill.split(","))}
                    phone={crd.phone}
                    email={crd.email}
                    title={crd.title}
                    id={crd._id}
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
import React, {Component} from "react";
import {Redirect} from "react-router-dom"
import "../css/user.css";
import CRDS from "../images/Crds_white.png";
import Placeholder from "../images/image-placeholder.png";
import axios from "axios";


class User extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            imgpath: Placeholder,
            name: '',
            email: '',
            phone: '',
            title: '',
            category: 'Web/Technology',
            address: '',
            skills: [],
            description: '',
            redirect: false,

        };
    };

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    };

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    };

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    };

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    };

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    };

    onChangeSkills(e) {
        this.setState({
            skills: e.target.value
        });
    };

    onChangeImg(e) {
        this.setState({
            imgpath: e.target.value
        });
    };

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    };

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const newCrd = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            title: this.state.title,
            address: this.state.address,
            category: this.state.category,
            imgpath: 'public/cardImg/',
            description: this.state.description, 
            skills: this.state.skills.split(", "),
        }

        axios.post('http://localhost:1993/api/crds', newCrd)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            email: '',
            phone: '',
            title: '',
            category: 'Web/Technology',
            skills: '',
            address: '',
            imgpath: Placeholder,
            description: '',
            redirect: true
        })

        if (this.state.redirect) {
            return <Redirect to='/network' />
        }
        
    }

    render(){
        
        if (this.state.redirect === true){
           return <Redirect to='/network' />
        }

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
        <div className="container justify-content-center">
            <a href="/" className="pull-left"><img alt="" src={CRDS} /></a>  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" id="myBtn" href="/network">My Networks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="myBtn" href="/public">Public Network</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" id="myBtn" href="/user">Edit My CRDS</a>
                            </li> */}
                         </ul>
                    <ul className="nav navbar-nav flex-fill  justify-content-end">
                        <div className="login">
                            <li className="nav-item">
{/* data-target="#myModal" data-toggle="modal" */} <a id="myBtn" role="button" href="/" className="btn btn-outline-info my-2 my-sm-0 mr-sm-2"> Logout </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </nav> 
    
    {/* <!-- CREATE BUSINESS CARD FORM --> */}
    <div className="container justify-content-center">
        <div className="form-group card">
                {/* <h3 className="text-center">Create a Business Card</h3> */}
                {/* <!-- USER PHOTO UPLOAD --> */}
                {/* <div className="user-photo text-center"> */}
                {/* <!-- SUBMIT PHOTO TO A DIFFERENT FOLDER --> */}
                   {/* <form className="mx-auto" encType="multipart/form-data" action="/cardPics" method="POST">
                       <img src={this.state.imgpath}  alt="Place Holder" height="200" width="200"/>
                       <div className="text-center p-2" >
                           <label for="userPhoto">Upload User Photo</label>
                           <input type="file" onChange={this.onChangeImg} className="form-control-file col-7" id="userPhoto" name="image"/>
                       </div>
                   </form>
               </div> */}
                {/* <!-- INPUT FIELDS --> */}
            <div className="container">
                <form onSubmit={this.onSubmit}>
                {/* <!-- NAME --> */}
                <label for="nameInput">Name</label>
                <input onChange={this.onChangeName} name="name" type="name" className="form-control" value={this.state.name} aria-describedby="nameHelp" placeholder="Full Name" required />
                {/* <!-- EMAIL --> */}
                <label for="emailInput">Email address</label>
                <input onChange={this.onChangeEmail} name="email" type="email" className="form-control" value={this.state.email} aria-describedby="emailHelp" placeholder="Enter email" required />
                {/* <!-- PHONE --> */}
                <label for="phoneInput">Phone Number</label>
                <input onChange={this.onChangePhone} name="phone" type="tel" className="form-control" value={this.state.phone} placeholder="3121112233" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                {/* <!-- POSITION TITLE --> */}
                <label for="titleInput">Title</label>
                <input onChange={this.onChangeTitle} name="title" type="text" className="form-control" value={this.state.title} placeholder="Example: Web developer, UX/UI, Graphic Designer" required placeholderTextColor/>
                {/* <!-- CATEGORY --> */}
                <label for="titleInput">Category</label>
                <select onChange={this.onChangeCategory} value={this.state.category} name="category" className="form-control"  required>
                        <option>Web/Technology</option>
                        <option>Media/Marketing</option>
                        <option>Household</option>
                        <option>Law/Legal</option>
                        <option>Medical/Health</option>
                        <option>Accounting/Finance</option>
                        <option>Food/Service</option>
                </select >
                {/* <!-- SKILLS --> */}
                <label for="skillInput">Skills</label>

                <input onChange={this.onChangeSkills} name="skills" type="text" className="form-control" value={this.state.skills} placeholder="Example: JavaScript, MySQL, HTML..." required />
                 {/* <!-- ADDRESS--> */}
                 <label for="titleInput">Address</label>
                <input onChange={this.onChangeAddress} name="title" type="text" className="form-control" value={this.state.address} placeholder="Street address, City / Town, State, Zip" required placeholderTextColor/>
                {/* Description */}
                <label for="titleInput">Description</label>
                <textarea onChange={this.onChangeDescription} name="description" type="text" className="form-control" value={this.state.description} placeholder="Tell us about what you do!" required placeholderTextColor></textarea>
                {/* <!-- SUBMIT --> */}
                <button onClick={this.setRedirect} type="submit" value="Your Card" className="btn">Create Your Card!</button>
               </form> 
            </div>
            <br />
        </div>
    </div>
            </div>
        );
    };
};

export default User
import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';

class facebook extends Component {

    

    render(){
        
        const responseFacebook = (response) => {
        console.log(response);
      }
        return <FacebookLogin
        appId="680491892385844"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    }
}

export default facebook
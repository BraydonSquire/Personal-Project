import React, { Component } from 'react';
import './../sass/index.sass';

export default class Login extends Component {
    render() {
        return (
            <div className=''>  
                
               <img className="sass-box" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
                <div className="flex">
                <a href={ process.env.REACT_APP_LOGIN }><button className="login">Login</button></a>
                </div>
            </div> 
        )
    }
}
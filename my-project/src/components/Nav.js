import React, {Component} from 'react';
import './../sass/index.css';

class Nav extends Component {
    

    render(){
        return (
            <div className="navbar">
               <a href="#/home" className="textdecor"> <span className="navlink">Home</span>  </a>
               <a href="#/gallery" className="textdecor"> <span className="navlink">Gallery</span> </a> 
               <a href="#/blog" className="textdecor"> <span className="navlink">Blog</span>  </a>
               <a href="#/music" className="textdecor"> <span className="navlink">Music</span>  </a>
               <a href='http://localhost:3001/auth/logout' className="navlink">Log out</a>
            </div>
        )
    }
}
 export default Nav;
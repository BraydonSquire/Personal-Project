import React, {Component} from 'react';
import './../sass/index.css';

class Nav extends Component {
    

    render(){
        let {header} = this.props;
        // return (
            // <div className="navbar">
            //    <a href="#/home" className="textdecor"> <span className="navlink">Home</span>  </a>
            //    <a href="#/gallery" className="textdecor"> <span className="navlink">Gallery</span> </a> 
            //    <a href="#/blog" className="textdecor"> <span className="navlink">Blog</span>  </a>
            //    <a href="#/music" className="textdecor"> <span className="navlink">Music</span>  </a>
            //    <a href='http://localhost:3001/auth/logout' className="navlink">Log out</a>
            
               
    return (
        <div className="flex">
        <div className="header-parent">
            <div className="header-container">
                <div className="header-child-left">
                    
                        {/* <a href="#/home" className="textdecor" >
                            Home
                        </a>
                        <a href="#/gallery" textdecor >
                            Gallery
                        </a> */}

<a href="#/home" className="textdecor"> <span className="header-logout">Home</span>  </a>
               <a href="#/gallery" className="textdecor"> <span className="header-logout">Gallery</span> </a> 
               <a href="#/blog" className="textdecor"> <span className="header-logout">Blog</span>  </a>
               <a href="#/music" className="textdecor"> <span className="header-logout">Music</span>  </a>
               {/* <a href='http://localhost:3001/auth/logout' className="navlink">Log out</a> */}

                </div>

               <div className="header-child-mid">
                    <span className="header-word">{header}</span>
                </div>

               <div className="header-child-right">
                        <a href="http://localhost:3001/auth/logout" className="navlink">
                    <span className="header-logout">Logout</span>
                </a>
                </div>
            </div>

       </div>
            
            
            
            </div>
        )
    }
}
 export default Nav;
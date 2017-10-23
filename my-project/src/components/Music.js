import React, {Component} from 'react';
import Nav from './Nav';


class Music extends Component {





    render(){
        return(
            <div>
            
           
            <div className="title-bar">
            <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
           <span className="many-me">Many Me</span>
            </div>
            <div className="flex">
            <Nav header="Music" />
            </div>

                <div className="music">

                    <img className="soundcloud" src="http://www.scdn.co/i/_global/open-graph-default.png" />

                    <div className="soundcloud">
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/66341816&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                </div>
                </div>


            </div>
        )
    }
} export default Music;
import React, {Component} from 'react';
import Nav from './Nav';


class Music extends Component {





    render(){
        return(
            <div className="message">
            
           
            <div className="title-bar">
            <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
           <span className="many-me">Many Me</span>
            </div>
            <div className="flex">
            <Nav header="Music" />
            </div>
            {/* Follow Me On These Platforms */}
                <div className="music">
                        
                   <a className="music-link" href="https://open.spotify.com/artist/2FxMTvBL9Asv8kIHLIIINC" > <img alt='' className="music-link2" src="http://www.scdn.co/i/_global/open-graph-default.png" />              </a>   
                   <a className="music-link" href="https://xeni.bandcamp.com/" > <img alt='' className="music-link2" src="http://skyforger.lv/wp-content/uploads/2015/12/bandcamp_logo4.png" />  </a> 
                   <a className="music-link" href="https://soundcloud.com/kendrasquire" > <img alt='' className="music-link2" src="https://i1.sndcdn.com/avatars-000131869186-my9qya-t500x500.jpg" />     </a>
                   <a className="music-link" href="https://itunes.apple.com/us/artist/kendra-squire/id871217655" > <img alt='' className="music-link2" src="http://internetretailing.net/files/2013/12/iTunes.jpg" />                    </a>

                    <div className="soundcloud">
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/66341816&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                </div>
                </div>


            </div>
        )
    }
} export default Music;
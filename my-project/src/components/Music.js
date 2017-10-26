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

                <div className="soundcloud">
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/66341816&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                </div>
                
                        
                   <a className="music-link" href="https://open.spotify.com/artist/2FxMTvBL9Asv8kIHLIIINC" > <img id="photo"  src="https://image.ibb.co/g1GhY6/spotify.png" alt="spotify" border="0" className="music-link2" />             </a>   
                   <a className="music-link" href="https://xeni.bandcamp.com/" > <img id="photo"  src="https://image.ibb.co/d0LgRR/icon.png" alt="icon" border="0" className="music-link2" />  </a> 
                   <a className="music-link" href="https://soundcloud.com/kendrasquire" > <img id="photo"  src="https://image.ibb.co/g8kWRR/soundcloud.png" alt="soundcloud" border="0" className="music-link2" />     </a>
                   <a className="music-link" href="https://itunes.apple.com/us/artist/kendra-squire/id871217655" > <img  id="photo" src="https://image.ibb.co/isaC0m/itunes_logo_of_amusical_note_inside_a_circle.png" alt="itunes_logo_of_amusical_note_inside_a_circle" border="0" className="music-link2" id="photo"  />                   </a>

                  
                </div>


            </div>
        )
    }
} export default Music;
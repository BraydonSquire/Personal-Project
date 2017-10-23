import React, {Component} from 'react';
import Nav from './Nav';
import { getPhotos } from './../ducks/users';
import { connect } from 'react-redux';
import AddPhoto from './AddPhoto';

class Gallery extends Component {

constructor() {
    super();

    this.state ={
        photos: []
    }
}

    
componentDidMount() {
    setTimeout(this.props.getPhotos(), 1200)
}   
    

    render(){
        const photos = this.props.photos;//set photos as redux prop photos
        console.log(photos[0].id)
        let list = photos.map( (e,i) => {//map over photos and get the links
    return (
        <img className="photo-box" key={i} src={e.link} alt='' />
    )
} )

        return(
            <div>
            
           
            <div className="title-bar">
            <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
           <span className="many-me">Many Me</span>
            </div>
            <div className="flex">
            <Nav header="Gallery"/>
            </div>
            
            <div className="gallery flex">
                
                {list}
                
                
                
            </div>

            <AddPhoto  />

            </div>
            //addphoto component here
        )
    }
}

function mapStateToProps(state) {
    console.log('state from Gallery view', state.photos);
    return {
        photos: state.photos
    }
}


export default connect(mapStateToProps, { getPhotos })(Gallery);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPhoto, fixPhoto } from './../ducks/users';


class AddPhoto extends Component {
     
    constructor() {
        super()

        this.state = {
            imageurl: '',
            input: ''
           
        }

        this.setInput = this.setInput.bind(this)

    }

     setInput = function(e) {
        this.setState({input: e.target.value})
        console.log(this.state.input)
    }
   

    render() {
        const addPhoto = this.props.addPhoto;
        // onChange={} needs to be put in input
        return(
            <div className="flex">
            
            <input className="input-box" type='text' placeholder="New Image URL" onChange={(e) => this.props.fixPhoto(e.target.value)} />
            
            <button onClick={ () => {this.props.addPhoto(this.props.input)}}>Add Photo</button>
        
            </div>
        )
    }


}

function mapStateToProps(state) {
    console.log('state from addPhoto component', state.input);
    return {
        photos: state.addPhoto,
        input: state.input
    }
}


export default connect(mapStateToProps, { addPhoto, fixPhoto })(AddPhoto);
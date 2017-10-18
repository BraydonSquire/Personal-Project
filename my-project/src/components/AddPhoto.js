import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPhoto } from './../ducks/users';


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
            
            <input className="input-box" type='text' placeholder="New Image URL" onChange={this.setInput} />
            
            <button>Add Photo</button>
        
            </div>
        )
    }


}

function mapStateToProps(state) {
    console.log('state from addPhoto component', state.input);
    return {
        photos: state.addPhoto
    }
}


export default connect(mapStateToProps, { addPhoto })(AddPhoto);
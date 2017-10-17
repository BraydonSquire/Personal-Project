import React, {Component} from 'react';


class AddPhoto extends Component {
     
    constructor() {
        super()

        this.state = {
            imageurl: '',
            input: ''
        }
    }

    render() {
        // onChange={} needs to be put in input
        return(
            <div className="flex">
            
            <input className="input-box" type='text' placeholder="New Image URL" />
            <button>Add Photo</button>
            </div>
        )
    }


}
export default AddPhoto;
import React, {Component} from 'react';


class AddPhoto extends Component {
     
    constructor() {
        super()

        this.state = {
            imageurl: ''
        }
    }

    render() {
        return(
            <div className="flex">
            <input className="input-box" type='text' placeholder="New Image URL" />
            </div>
        )
    }


}
export default AddPhoto;
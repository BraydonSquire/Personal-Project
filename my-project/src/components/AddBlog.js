import React, { Component } from 'react';


class AddBlog extends Component {

    constructor(){
        super()

        this.state= {
            newBlog:'',
            date:'',
            title:''
        }

        this.newInput = this.newInput.bind(this);
    }


    newInput = function(e) {
        this.setState({newBlog: e.target.value})
        console.log('state newBlog', this.state.newBlog)
    }


    render(){
        return(
            <div>

                <input type="text" className="input-box" placeholder="Add New Blog Post.." onChange={ (e) => {
                    this.props.addNewBlog(e.target.value)
                } } />

                <button onClick={ () => {this.props.addBlog(this.props.newBlog)} } >Add Blog Post</button>

            </div>
        )
    }

}
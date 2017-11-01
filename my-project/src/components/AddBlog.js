import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBlog, addNewBlog, trackDate, trackTitle } from './../ducks/users';


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

<input type="text" className="input-box" placeholder="Date" onChange={ (e) => {
                    this.props.trackDate(e.target.value)
                } } />

<input type="text" className="input-box" placeholder="Title" onChange={ (e) => {
                    this.props.trackTitle(e.target.value)
                } } />

                <button onClick={ () => {this.props.addBlog(this.props.newBlog, this.props.date, this.props.title)} } >Add Blog Post</button>

            </div>
        )
    }

}

function mapStateToProps(state) {
    // console.log('state from addBlog component', state.newBlog);
    return {
        newBlog: state.newBlog,
        addBlog: state.addBlog,
        date: state.date,
        title: state.title
    }
}


export default connect(mapStateToProps, { addBlog, addNewBlog, trackDate, trackTitle })(AddBlog);
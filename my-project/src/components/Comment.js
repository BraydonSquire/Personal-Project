import React, {Component} from 'react';
import './../sass/index.css';
import {connect} from 'react-redux';
import { trackComment, postComment } from './../ducks/users';

class Comment extends Component {
    constructor(){
        super()

        this.state = {
            comment: '',
            post: []
        }
    }


    render(){
        const postComment = this.props.postComment;
        // const list = this.props.
        return(
            <div className="comment-box">

                {this.props.comments}

                <input className="comment" type='text' placeholder='Write A Comment...' onChange={(e) => this.props.trackComment(e.target.value)}/>
                <div>
                    <button onClick={ () => {this.props.postComment(this.props.comment, this.props.post.blogid)}} className="comment-button"> Post Comment </button>
                    {/* <button onClick={console.log(this.props.comment)} /> */}
                </div>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    // console.log('state from Comment component', state.comment);
    return {
        comment: state.comment,
        post: state.post,

    }
}


export default connect(mapStateToProps, { trackComment, postComment })(Comment);
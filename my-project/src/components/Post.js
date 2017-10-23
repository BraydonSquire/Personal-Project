import React, {Component} from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { getPost } from './../ducks/users';


class Post extends Component {

    constructor(){
        super();

        this.state = {
            post:'test text'
        }
    }

    componentDidMount() {
         this.props.getPost()
    }




    render() {
            const post = this.props.post;
            console.log(this.props)
        return (
            <div>
            
           
            <div className="title-bar">
            <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
           <span className="many-me">Many Me</span>
            </div>
            <div className="flex">
            <Nav header="Post" />
            </div>
            
                <div className="posts">
                    <div className="full-post">
                        {post.content}
                    </div>
                    
                </div>

            </div>
        )
    }
}



function mapStateToProps(state) {
    console.log('state from post view', this.state);
    return {
        post: state.post
    }
}


export default connect(mapStateToProps, { getPost })(Post);
import React, {Component} from 'react';
import Nav from './Nav';
import { getBlogs } from './../ducks/users';
import { connect } from 'react-redux';


class Blog extends Component {
constructor() {
    super()

    this.state = {
        blogPosts:[]
    }
}

 componentDidMount() {
     this.props.getBlogs();

 }
//for displaying blog post

    render(){
       const blogPosts = this.props.blogPosts;
        return(
            <div>
            
           
            <div className="title-bar">
            <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
           <span className="many-me">Many Me</span>
            </div>
            <div className="flex">
            <Nav header="Blog" />
            </div>
            
                <div className="posts">
                    {/* {blogPosts[0]} */}
                </div>

            </div>
        )
    }
} 

function mapStateToProps(state) {
    console.log('state from blog view', state.blogPosts);
    return {
        blogPosts: state.blogPosts
    }
}


export default connect(mapStateToProps, { getBlogs })(Blog);
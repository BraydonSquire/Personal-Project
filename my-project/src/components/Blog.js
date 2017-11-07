import React, {Component} from 'react';
import Nav from './Nav';
import AddBlog from './AddBlog';
import { getBlogs, getPost, deletePost } from './../ducks/users'; //import needed prop from reducer
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';//import connect to make this component subscribe to the store


class Blog extends Component {
constructor() {
    super()

    this.state = {
        blogPosts:[]
    }
}

 componentDidMount() {
    setTimeout( this.props.getBlogs() , 1200);
      //prop imported from reducer
     
 }
//for displaying blog post

    render(){
       const blogPosts = this.props.blogPosts;
       let list = blogPosts.map( (item, i) => {
        //    console.log('item',item)
        //    console.log('PROPS', this.props)
           return (
               <div className="post-container" key={i}>
                    {item.title}  
                    <Link onClick={ () => {this.props.getPost(item.blogid)}} to="/post" className="post-button textdecor">View Full Post</Link>
                    
                    { this.props.user.id === 1 || 2 ? <button onClick={ () => {this.props.deletePost(item.blogid)} }>
                        Delete Post
                    </button> : null}
                
                <div className="post-content"> 
                {item.date}
                
                 </div>
                </div>
           )
       })
        return(
            <div className="blog-view">
            
           
            {/* <div className="title-bar">
            <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
           <span className="many-me">Many Me</span>
            </div> */}
            <div className="flex">
            <Nav header="Blog" />
            </div>
            
                <div className="posts">
                    {list}
                    
                    { this.props.user.id === 1 || 2 ? <AddBlog /> : null }
                </div>

            </div>
        )
    }
} 

function mapStateToProps(state) {
    // console.log('state from blog view', state.blogPosts);
    return {
        blogPosts: state.blogPosts,
        user: state.user,
        deletedPost: state.deletedPost
    }
}


export default connect(mapStateToProps, { getBlogs, getPost, deletePost })(Blog);
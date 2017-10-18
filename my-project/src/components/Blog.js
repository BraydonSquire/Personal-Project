import React, {Component} from 'react';
import Nav from './Nav';
import { getBlogs } from './../ducks/users'; //import needed prop from reducer
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
           return (
               <div className="post-container" key={i}>
                    {item.title}  
                    <a href="#/post" className="post-button textdecor">View Full Post</a>
                <div className="post-content"> 
                {item.date}
                
                 </div>
                </div>
           )
       })
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
                    {list}
                    
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
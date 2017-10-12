import React, {Component} from 'react';
import Nav from './Nav';


class Blog extends Component {
constructor() {
    super()

    this.state = {
        blogPosts:[]
    }
}

// componentDidMount()
//for displaying blog post

    render(){
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

                </div>

            </div>
        )
    }
} export default Blog;
import React, {Component} from 'react';
import Nav from './Nav';
import Comment from './Comment';
import { connect } from 'react-redux';
import { getPost, getComments, postComment } from './../ducks/users';


class Post extends Component {

    constructor(){
        super();

        this.state = {
            post:[],
            comments: []
        }
    }


    

    componentDidMount() {
        console.log('hey')
        
         this.props.getPost();
         this.props.getComments(this.props.post.blogid);
         console.log(this.props.post.blogid)//figure this out
    }
    
    




    render() {
        const comment = this.props.comments || [];//set it to null if this.props.comments doesn't have the comments yet.
        // console.log(this.props.comments)
        let list = comment.map( (e, i) => {
            return(
                <div key={i} className="comment-list">
                    {e.comments}
                </div>
            )
        })

    
    
            const post = [this.props.post]; //wrap the props in an array so that the .map() works
            console.log('this.props.post',this.props.post)
          
            let fullPost = post.map( (item, i) => {
                return(
                    <div className="blog-container" key={i}>
                        {item.title}
                        <div className="date">
                        {item.date}
                        </div>
                        <div className="blog-content" key={i}>
                        {item.content}
                        </div>
                        
                    </div>
                )
            })

            

        return (
            <div>
            
           
            <div className="title-bar">
            <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
           <span className="many-me">Many Me</span>
            </div>
            <div className="flex">
            <Nav header={this.props.post.title} />
            </div>
            
                <div className="posts">
                    <div className="full-post">
                        {fullPost}
                    </div>
                    
                    {list}
                    <Comment />

                </div>

            </div>
        )
    }
}



function mapStateToProps(state) {
    // console.log('state from post view', state.comments);
    return {
        post: state.post,
        comments: state.comments
    }
}


export default connect(mapStateToProps, { getPost, getComments, postComment  })(Post);
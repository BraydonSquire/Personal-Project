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
         this.props.getPost();
        //  this.props.getComments();
    }




    render() {
        const comment = this.props.comments
        console.log(this.props.comments)
            const post = [this.props.post]; //wrap the props in an array so that the .map() works
            console.log(this.props.post)
            // const comments = this.props.comments;
            // .map( (item,i) => {
            //     return(
            //         <div>
            //             {item.comments}
            //         </div>
            //     )
            // } ) ;
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
                    
                
                    <Comment />

                </div>

            </div>
        )
    }
}



function mapStateToProps(state) {
    console.log('state from post view', state.comments);
    return {
        post: state.post,
        comments: state.comments
    }
}


export default connect(mapStateToProps, { getPost, getComments, postComment  })(Post);
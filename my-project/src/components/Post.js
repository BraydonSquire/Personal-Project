import React, {Component} from 'react';
import Nav from './Nav';
import Comment from './Comment';
import { connect } from 'react-redux';
import { getPost } from './../ducks/users';


class Post extends Component {

    constructor(){
        super();

        this.state = {
            post:[]
        }
    }

    componentDidMount() {
         this.props.getPost()
    }




    render() {
            const post = [this.props.post]; //wrap the props in an array so that the .map() works
            console.log([this.props.post])
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
                    
                    {<Comment />}

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
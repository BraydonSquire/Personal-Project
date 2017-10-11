import React, { Component } from 'react';
//import axios from 'axios';
import { getUserInfo } from './../ducks/users'; // the first ./ says start in the private folder
import { connect } from 'react-redux';
import Nav from './Nav';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }
//when the /private endpoint is hit the componentDidMount method will fire and make an
//axios.get call to /aut/me then set the component state equal to the req.user's results.data
// componentDidMount() {
//     axios.get('/auth/me').then( res => { 
//         this.setState({
//             userInfo: res.data
//         })
//     })
// }

componentDidMount() {
    this.props.getUserInfo();
}


    
    render() {
        const user = this.props.user;
        return (
            <div>
                {/* {JSON.stringify(this.state.userInfo, null, 2)}  */}
                {/* this is displaying the userInfo state first */}
                {/* JSON.stringify lets you display an object in react by converting it to a string value */}
               
               <div className="move-right">
                <img className="sass-box" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
                </div>
                <div className="nav-container">
                <Nav />
                </div>
                <div className="flex">
                <a href='http://localhost:3001/auth/logout'><button className="logout">Log out</button></a>
                </div>
                </div>
             
        )
    }
} 

function mapStateToProps(state) {
    console.log('state from Home', state);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Home);
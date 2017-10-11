import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
// import Nav from './Nav';
import './../sass/index.sass';



class Routers extends Component {
    render () {
        return(
            <Router>
                <div className="flex">
                    <Route exact path='/auth' component={ Login } />
                    <Route path='/home' component={ Home } />
                    {/* <Route path='' component={} />
                    <Route path='' component={} />  */}
                </div>
            </Router>
        )
    }
} export default Routers;
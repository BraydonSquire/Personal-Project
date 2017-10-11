import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
// import Nav from './Nav';
import Gallery from './Gallery';
import Music from './Music';
import Blog from './Blog';
import './../sass/index.sass';



class Routers extends Component {
    render () {
        return(
            <Router>
                <div className="flex">
                    <Route exact path='/auth' component={ Login } />
                    <Route path='/home' component={ Home } />
                    <Route path='/gallery' component={ Gallery } />
                    <Route path='/music' component={Music} />
                    <Route path='/blog' component={Blog} /> 
                </div>
            </Router>
        )
    }
} export default Routers;
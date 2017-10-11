import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/users';

export default createStore(reducer, applyMiddleware( promiseMiddleware() ) ); //this is basically the entire syntax for a store.js file. 
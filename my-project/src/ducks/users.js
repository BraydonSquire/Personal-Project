import axios from 'axios';

const initialState = { //when the app is first run there is no state that is created yet so we must declare an initialState first
    user: {},
    blogPosts:[]
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo() {
    const userData = axios.get('/auth/me')//this is an action (same thing as an action creator)
    .then( res => {
        return res.data
    })
    return {
        type:GET_USER_INFO ,
        payload: userData //
    }
}

const GET_ALL_BLOGS = 'GET_ALL_BLOGS';

export function getBlogs() {
    const blogPosts = axios.get('/api/allblogs')
    .then( res => {
        console.log(res.data)
        return res.data
    })
    return {
        type:GET_ALL_BLOGS,
        payload: blogPosts
    }
}


export default function reducer(state = initialState, action) { //state = initialState is setup to not break the app when it is first run, since the state is originally undefined. state will only equals
    //initialState if state is undefined. otherwise state will equal the current state, and not the initial state.
   switch(action.type) {
       //after the case you concatinate it (Add on to) with '_FULFILLED'
       case GET_USER_INFO + '_FULFILLED':
            return Object.assign( {}, state, {user: action.payload})
            // break; if the case didn't return something and be FULFILLED you would need a break to stop it
            
            //once a case is fulfilled it stops the function 

       case GET_ALL_BLOGS + '_FULFILLED':
            return Object.assign( {}, state, {blogPosts: action.payload})

       default:
        return state;     
   }

}
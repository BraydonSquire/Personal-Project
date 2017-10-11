import axios from 'axios';

const initialState = { //when the app is first run there is no state that is created yet so we must declare an initialState first
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo() {
    const userData = axios.get('/auth/me')
    .then( res => {
        return res.data
    })
    return {
        type:GET_USER_INFO ,
        payload: userData
    }
}


export default function reducer(state = initialState, action) { //state = initialState is setup to not break the app when it is first run, since the state is originally undefined. state will only equals
    //initialState if state is undefined. otherwise state will equal the current state, and not the initial state.
   switch(action.type) {
       //after the case you concatinate it (Add on to) with '_FULFILLED'
       case GET_USER_INFO + '_FULFILLED':
            return Object.assign( {}, state, {user: action.payload})
            // break;
            // if there were more case's you would seperate with break; statements
       default:
        return state;     
   }

}
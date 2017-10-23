import axios from 'axios';

const initialState = { //when the app is first run there is no state that is created yet so we must declare an initialState first
    user: {},
    blogPosts:[{content: '', title: ''}], //the initialstate is treated as PROPS :D
    photos:[{link: ''}],
    post:[],
    addPhoto:'',
    input:'',
    comment:'',
    blogid:''
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

const GET_ALL_BLOGS = 'GET_ALL_BLOGS'; //set it as a string value because reasons

export function getBlogs() { //export the function after the const is defined
    const blogPosts = axios.get('/api/allblogs') //the payload is equal to axios.get('the endpoint you made with the controller logic in the server file')
    .then( res => { //the payload is also equal to everything after the endpoint. it's equal to the whole function basically
        console.log(res.data)
        return res.data
    })
    return {
        type:GET_ALL_BLOGS,
        payload: blogPosts
    }
}

const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS'

export function getPhotos() {
    console.log('get photos fired')
    const photos = axios.get('/api/allphotos')
    .then( res => {
        console.log("get photos res: ", res.data)
        return res.data
    })
    return {
        type:GET_ALL_PHOTOS,
        payload:photos
    }
}

const GET_BLOG_POST = 'GET_BLOG_POST'

export function getPost(id) {
    console.log('getting blog post')
    const post = axios.get('/api/post/' + id )
    .then( res => {
        console.log('post content:', res.data)
        return res.data[0]
    })
    return {
        type:GET_BLOG_POST,
        payload:post
    }
}

const ADD_PHOTO = 'ADD_PHOTO'

export function addPhoto(images) {
    console.log(images)
    const image = {
        image: images
    }
    // const add = () => {
         axios.post('/api/addphoto', image).then(res => {res.data})
    //         return res.data 

    //     })
    // }
    // const add = axios.post('/api/addphoto/',image )
    // .then( res => {
    //     console.log('photo url:', res.data)
    //     return res.data
    // })
    return {
        type:ADD_PHOTO
        
    }
}

const FIX_PHOTO = 'FIX_PHOTO'

export function fixPhoto(e){
return {
    type:FIX_PHOTO,
    payload:e
}
}

const TRACK_COMMENT = 'TRACK_COMMENT'

export function trackComment(e) {
    console.log(e)
    return{
        type:TRACK_COMMENT,
        payload:e
    }
    
}

const POST_COMMENT = 'POST_COMMENT'

export function postComment(comments, blogid) {
    const comment = {
        comment:comments,
        blogid: blogid
    }
    console.log(comment)
    axios.post('/api/postcomment', comment).then(res => {res.data})

    return {
        type:POST_COMMENT
    }
}


export default function reducer(state = initialState, action) { //state = initialState is setup to not break the app when it is first run, since the state is originally undefined. state will only equals
    //initialState if state is undefined. otherwise state will equal the current state, and not the initial state.
   switch(action.type) {
       //after the case you concatinate it (Add on to) with '_FULFILLED'
       case GET_USER_INFO + '_FULFILLED':
            return Object.assign( {}, state, { user: action.payload })
            // break; if the case didn't return something and be FULFILLED you would need a break to stop it
            
            //once a case is fulfilled it stops the function 

       case GET_ALL_BLOGS + '_FULFILLED':
            return Object.assign( {}, state, { blogPosts: action.payload }) //set's redux's state (which is props for the whole app)


       case GET_ALL_PHOTOS + '_FULFILLED':
            return Object.assign( {}, state, { photos: action.payload }) 

       case GET_BLOG_POST + '_FULFILLED':
            return Object.assign( {}, state, { post: action.payload })     

       case ADD_PHOTO + '_FULFILLED':
            return Object.assign( {}, state, { addPhoto: action.payload })     
            
       case FIX_PHOTO :
            return Object.assign( {}, state, {input: action.payload})

       case TRACK_COMMENT :
            return Object.assign( {}, state, {comment: action.payload})     
       
            default:
        return state;     
   }

}
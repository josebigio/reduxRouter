import axios from 'axios';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const CREATE_POST_SUCESS = 'CREATE_POST_SUCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=joseisthebomb';

export function fetchPosts() {
    console.log('fetchPosts...');
     const request = `${ROOT_URL}/posts${API_KEY}`;
     return function(dispatch) {
         return axios.get(request)
            .then((result)=>{
                console.log('success getting data',result);
                dispatch({
                    type:FETCH_POSTS_SUCCESS,
                    payload:result.data
                });
            })
            .catch((error)=>{
                console.log('error getting data',error);
                 dispatch({
                    type:FETCH_POSTS_ERROR,
                    payload:error
                });
            });
     }
}

export function createPost(props) {
    console.log('createPost...',props);
     const request = `${ROOT_URL}/posts${API_KEY}`;
     return function(dispatch) {
         return axios.post(request, props)
            .then((result)=>{
                console.log('success posting data',result);
                dispatch({
                    type:CREATE_POST_SUCESS,
                    payload:result
                });
            })
            .catch((error)=>{
                console.log('error posting data',error);
                 dispatch({
                    type:CREATE_POST_ERROR,
                    payload:error
                });
            });
     }
}
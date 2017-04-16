import { FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS } from '../actions';

const initialState = {all:[], posts: null};
const PostReducer = (state=initialState,action) => {
    switch(action.type) {
        case FETCH_POSTS_SUCCESS:{
            return {...state, all:action.payload}
        }
        case FETCH_POSTS_ERROR:{
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export default PostReducer;
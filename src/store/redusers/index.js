import { combineReducers } from 'redux';
import posts from './posts';
import isCreate from './isCreate';
import isOpenPost from './isOpenPost';
import isAdmin from './isAdmin';
import isAuth from './isAuth';



export default combineReducers({
    isAuth,
    isCreate,
    isOpenPost,
    isAdmin,
    posts
})
import { combineReducers } from 'redux';
import posts from './posts';
import isCreate from './isCreate';
import isOpenPost from './isOpenPost';
import isAdmin from './isAdmin';
import isAuth from './isAuth';
import users from './users';
import isDeleteProfile from './isDeleteProfile';

export default combineReducers({
    isAuth,
    isCreate,
    isOpenPost,
    isAdmin,
    users,
    isDeleteProfile,
    posts
})
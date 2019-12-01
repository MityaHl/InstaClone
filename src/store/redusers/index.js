import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import mainValues from './mainValues';
import authUser from './authUser';


export default combineReducers({
    users,
    mainValues,
    authUser,
    posts
})
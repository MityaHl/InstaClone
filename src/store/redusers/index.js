import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import mainValues from './mainValues';


export default combineReducers({
    users,
    mainValues,
    posts
})
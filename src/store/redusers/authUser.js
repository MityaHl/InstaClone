const authUser = {};

export default function instaClone(state = authUser, action) {
    if(action.type === 'ADD_AUTH_USER') {
        return action.payload
    }

    if(action.type === 'DELETE_AUTH_USER') {
        return  action.payload
    }
    return state;
}     
const authUser = {};

export default function instaClone(state = authUser, action) {
    if(action.type === 'ADD_AUTH_USER') {
        return action.payload
    }

    if(action.type === 'DELETE_AUTH_USER') {
        return  action.payload
    }
    if(action.type === 'CHANGE_USER_IMAGE') {
        return  {
            ...state, 
            image: action.payload
        }
    }
    return state;
}     
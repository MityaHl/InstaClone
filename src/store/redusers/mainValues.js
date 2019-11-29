let initialState = {
    isAdmin: true,
    isAuth: false,
    isCreate: false,
    isDeleteProfile: false,
    isEditPost: false,
    isOpenPost: false
}

export default function instaClone(state = initialState, action) {
    if(action.type === 'CHANGE_IS_ADMIN') {
        return (
             action.payload
        )
    }
    if(action.type === 'CHANGE_IS_AUTH') {
        return {
            ...state,
            isAuth: action.payload,
        }
    }
    if(action.type === 'CHANGE_IS_ADMIN') {
        return {
            ...state,
            isAdmin: action.payload,
        }
    }
    if(action.type === 'CHANGE_ISCREATE') {
        return {
            ...state,
            isCreate: action.payload,
        }
    }
    if(action.type === 'CHANGE_IS_DELETE_PROFILE') {
        return {
            ...state,
            isDeleteProfile: action.payload,
        }
    }
    if(action.type === 'CHANGE_ISOPEN_POST') {
        return {
            ...state,
            isOpenPost: action.payload,
        }
    }
    if(action.type === 'CHANGE_IS_EDIT_POST') {
        return {
            ...state,
            isEditPost: action.payload,
        }
    }
    return state;
} 
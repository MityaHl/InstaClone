export const queryUsers = (postData) => ({
    type: 'QUERY_USER', 
    payload: postData
});

export const changeIsAdmin = (postData) => ({
    type: 'CHANGE_USER_ADMIN', 
    payload: postData
});

export const deleteUser = (postData) => ({
    type: 'DELETE_USER', 
    payload: postData
});
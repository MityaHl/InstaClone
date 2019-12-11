export const addAuthUser = (data) => ({
    type: 'ADD_AUTH_USER', 
    payload: data
});

export const deleteAuthUser = () => ({
    type: 'DELETE_AUTH_USER', 
    payload: {} 
});
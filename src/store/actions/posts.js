export const createPost = (postData) => ({
    type: 'ADD_POST', 
    payload: postData
});

export const queryPosts = (postData) => ({
    type: 'QUERY_POST', 
    payload: postData
});


export const queryPosts = (postData) => ({
    type: 'QUERY_POST', 
    payload: postData
});

export const deletePosts = (postData) => ({
    type: 'DELETE_POST', 
    payload: postData
});


export const closeCreating = () => ({
    type: 'CHANGE_ISCREATE', 
    payload: false 
});

export const openCreating = () => ({
    type: 'CHANGE_ISCREATE', 
    payload: true 
});

export const openPost = () => ({
    type: 'CHANGE_ISOPEN_POST', 
    payload: true 
});

export const isAuthTrue = () => ({
    type: 'CHANGE_IS_AUTH', 
    payload: true 
});

export const isDeleteTrue = () => ({
    type: 'CHANGE_IS_DELETE_PROFILE',
    payload: true 
});

export const isDeleteFalse = () => ({
    type: 'CHANGE_IS_DELETE_PROFILE',
    payload: false 
});

export const isDeleteUserTrue = () => ({
    type: 'CHANGE_IS_DELETE_USER',
    payload: true 
});

export const isDeleteUserFalse = () => ({
    type: 'CHANGE_IS_DELETE_USER',
    payload: false 
});

export const editPostTrue = () => ({
    type: 'CHANGE_IS_EDIT_POST', 
    payload: true 
});

export const editPostFalse = () => ({
    type: 'CHANGE_IS_EDIT_POST', 
    payload: false 
});

export const isChangeImageTrue = () => ({
    type: 'CHANGE_IMAGE',
    payload: true 
});

export const isChangeImageFalse = () => ({
    type: 'CHANGE_IMAGE',
    payload: false 
});

export const isDeletePostTrue = () => ({
    type: 'CHANGE_IS_DELETE_POST',
    payload: true 
});

export const isDeletePostFalse = () => ({
    type: 'CHANGE_IS_DELETE_POST',
    payload: false 
});

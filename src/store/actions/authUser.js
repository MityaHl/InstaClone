export const addAuthUser = () => ({
    type: 'ADD_AUTH_USER', 
    payload: {   
        login: 'mitya-hl',
        password: 123,
        name: 'Mitya',
        surname: 'Hlopya',
        email: 'mitka@mail.com',
        isDelete: true,
        image: "https://sun9-23.userapi.com/c858432/v858432428/2e14d/MFQ_VdapOl8.jpg"
    }
});

export const deleteAuthUser = () => ({
    type: 'DELETE_AUTH_USER', 
    payload: {} 
});
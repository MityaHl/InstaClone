const users = [
    {   
        login: 'mitya-hl',
        password: 123,
        name: 'Mitka',
        email: 'mitka@mail.com',
        isDelete: true
    },
    {
        login: 'pasha-as',
        password: 321,
        name: 'Pasha',
        email: 'pasha@mail.com',
        isDelete: false
    }
    
];

export default function instaClone(state = users, action) {
    return state;
} 
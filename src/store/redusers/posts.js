const posts = [
    
];

export default function instaClone(state = posts, action) {
    if(action.type === 'ADD_POST') {
        return [
            ...state, action.payload
        ]
    }
    return state;
}     


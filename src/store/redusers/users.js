const users = [
    
];

export default function instaClone(state = users, action) {
    if(action.type === 'QUERY_USER') {
        return action.payload
    }
    return state;
} 
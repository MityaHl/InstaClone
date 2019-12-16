const users = [
    
];

export default function instaClone(state = users, action) {
    if(action.type === 'QUERY_USER') {
        return action.payload
    }
    if(action.type === 'DELETE_USER') {
        let newState = state.filter(element => (element.id != action.payload.id));
        console.log(newState);
        return [
            ...newState  
        ]
    }
    if(action.type === 'CHANGE_USER_ADMIN') {
        state.forEach(element => {
            if(element.id == action.payload.id) {
                element.admin = action.payload.admin
            }
        });
        return [
            ...state  
        ]
    }
    return state;
} 
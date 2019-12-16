
const posts = [

];

export default function instaClone(state = posts, action) {
    if(action.type === 'QUERY_POST') {
        return action.payload
    }
    if(action.type === 'DELETE_POST') {
        let newState = state.filter( post => post.id != action.payload)
        return [
            ...newState
        ]
    }
    return state;
}     


export default function instaClone(state = false, action) {
    if(action.type === 'CHANGE_IS_AUTH') {
        return (
             action.payload
        )
    }
    return state;
}     
export default function instaClone(state = true, action) {
    if(action.type === 'CHANGE_IS_ADMIN') {
        return (
             action.payload
        )
    }
    return state;
}     
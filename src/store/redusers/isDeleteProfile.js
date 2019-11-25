export default function instaClone(state = false, action) {
    if(action.type === 'CHANGE_IS_DELETE_PROFILE') {
        return (
             action.payload
        )
    }
    return state;
}     
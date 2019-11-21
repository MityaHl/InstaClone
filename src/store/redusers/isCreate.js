export default function instaClone(state = false, action) {
    if(action.type === 'CHANGE_ISCREATE') {
        return (
             action.payload
        )
    }
    return state;
}     
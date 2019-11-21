export default function instaClone(state = false, action) {
    if(action.type === 'CHANGE_ISOPEN_POST') {
        return (
             action.payload
        )
    }
    return state;
}     
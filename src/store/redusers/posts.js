
const posts = [
    {
        title: 'Arsenal',
        author: 'mitya-hl',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'football'
    }
];

export default function instaClone(state = posts, action) {
    if(action.type === 'QUERY_POST') {
        return action.payload
    }
    return state;
}     


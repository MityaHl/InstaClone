
const posts = [
    {
        title: 'Arsenal',
        author: 'Mitka',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'football'
    },
    {
        title: 'dynamo drest',
        author: 'Pasha',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'hockey'
    },
    {
        title: 'dynamo drest',
        author: 'Pasha',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'basketball'
        
    }
];

export default function instaClone(state = posts, action) {
    if(action.type === 'ADD_POST') {
        return [
            ...state, action.payload
        ]
    }
    return state;
}     


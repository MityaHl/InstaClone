
const posts = [
    {
        title: 'Arsenal',
        author: 'Mitka',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. '
    },
    {
        title: 'dynamo drest',
        author: 'Pasha',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. '
    },
    {
        title: 'dynamo drest',
        author: 'Pasha',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. '
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


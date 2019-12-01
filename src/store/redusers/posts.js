
const posts = [
    {
        title: 'Arsenal',
        author: 'mitya-hl',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'football'
    },
    {
        title: 'dynamo drest',
        author: 'mitya-hl',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'hockey'
    },
    {
        title: 'dynamo drest',
        author: 'pasha-as',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'basketball'
    },
    {
        title: 'dynamo drest',
        author: 'mitya-hl',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'hockey'
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


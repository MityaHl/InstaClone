export const createPost = () => ({
    type: 'ADD_POST', 
    payload: {
        title: 'General Soft',
        author: 'Roma',
        content: 'Наиболее вероятный сценарий при увольнении Эмери - это Юнберг+Боулд. Это даст клубу возможность найти кандидата на замену Эмери уже к лету. ',
        tag: 'football'
    }
});

export const closeCreating = () => ({
    type: 'CHANGE_ISCREATE', 
    payload: false 
});
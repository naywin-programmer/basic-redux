export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text
})

export const getTodo = () => ({
    type: 'GET_ALL_TODO',
})
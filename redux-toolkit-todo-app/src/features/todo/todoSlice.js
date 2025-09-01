import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {id: 1, text: 'hello world!', invisible: false,checked: false},
        {id: 2, text: 'Python', invisible: false,checked: false},
        {id: 3, text: 'React', invisible: false,checked: false},
        {id: 4, text: 'JavaScript', invisible: false,checked: false}
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                invisible: false,
                checked: false
            }
            state.todos.unshift(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(( todo ) => ( todo.id !== action.payload ))
        },

        updateTodo: (state, action) => {
            const {id, newText} = action.payload
            state.todos = state.todos.map( (todo) => todo.id === id ? { ...todo, text: newText } : todo );
        },

        toggleVisibality: (state, action) => {
            const {id, newInvisible} = action.payload
            state.todos = state.todos.map( (todo) => todo.id === id ? {...todo, invisible: newInvisible} : todo);
        },

        checked: (state, action) => {
            const {id} = action.payload
            state.todos = state.todos.map( (todo) => todo.id === id ? {...todo, checked: !todo.checked}: todo )
        } 
    }
})

export const {addTodo, removeTodo, updateTodo, toggleVisibality, checked} = todoSlice.actions

export default todoSlice.reducer
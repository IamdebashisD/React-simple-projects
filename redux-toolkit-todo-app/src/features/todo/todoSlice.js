import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {id: 1, text: 'hello world!'},
        {id: 2, text: 'Python'},
        {id: 3, text: 'React'},
        {id: 4, text: 'JavaScript'}
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.unshift(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(( todo ) => ( todo.id !== action.payload ))
        },

        updateTodo: (state, action) => {
            const {id, newText} = action.payload
            state.todos =  state.todos.map( (todo) => todo.id === id ? { ...todo, text: newText } : todo );
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
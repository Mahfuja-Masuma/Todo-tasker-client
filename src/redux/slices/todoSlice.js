import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        newTodos: [],
        progressTodos: [],
        completedTodos: [],
        cancelTodos: [],

    },
    reducers: {
        createNewTodo: (state, action) => {
            state.newTodos = action.payload
        },
        createProgressTodo: (state, action) => {
            state.progressTodos = action.payload
        },
        createCompletedTodo: (state, action) => {
            state.completedTodos = action.payload
        },
        createCancelTodo: (state, action) => {
            state.cancelTodos = action.payload
    
    }
}
})


export const { createNewTodo, createProgressTodo, createCompletedTodo, createCancelTodo } = todoSlice.actions;

export default todoSlice.reducer;
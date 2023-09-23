import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1,
        text: "Hello Shivam"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo: (state, action) => {}
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)   // in state(initialState) there is todos , so push todo inside it. 
            
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
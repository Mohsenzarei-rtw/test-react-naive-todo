import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		toggleComplete: (state, action) => {
			let findTodo = state.find((item) => item.id === action.payload);
			findTodo.completed = !findTodo.completed;
			state = [...state, findTodo];
		},
		removeTodo: (state, action) => {
			let findTodo = state.filter((item) => item.id !== action.payload);
			return (state = findTodo);
		},
		editTodo: (state, action) => {
			let findTodo = state.find((item) => item.id === action.payload.id);
			findTodo.title = action.payload.title;
			state = [...state, findTodo];
		},
	},
});

export const { addTodo, toggleComplete, removeTodo, editTodo } =
	todoSlice.actions;

export default todoSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodosState = {
	id: string;
	name: string;
	status: string;
};

const TODO_INITIAL_STATE: TodosState[] = localStorage['todos']
	? JSON.parse(localStorage.getItem('todos') || '[]')
	: [];

export const todoSlice = createSlice({
	name: 'todos',
	initialState: TODO_INITIAL_STATE,
	reducers: {
		addTodo: (state, action: PayloadAction<TodosState>) => {
			state.push(action.payload);
			localStorage.setItem('todos', JSON.stringify(state));
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			const index = state.findIndex((todo) => todo.id === action.payload);
			state.splice(index, 1);
			localStorage.setItem('todos', JSON.stringify(state));
		},
		updateTodo: (state, action: PayloadAction<TodosState>) => {},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

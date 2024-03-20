import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export interface TodoState {
	id: string;
	name: string;
	status: string;
}

export type TodosState = {
	todo: TodoState[];
};

const TODO_INITIAL_STATE: TodosState = {
	todo: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') || '{}') : [],
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState: TODO_INITIAL_STATE,
	reducers: {
		addTodo: (state = TODO_INITIAL_STATE, action: PayloadAction<TodoState>) => {
			if (!action.payload.name) return;
			const todo = {
				id: v4(),
				name: action.payload.name,
				status: 'todo',
			};

			const updatedTodo = [...state.todo, todo];
			localStorage.setItem('todos', JSON.stringify(updatedTodo));
			console.log(state.todo);

			return {
				...state,
				todo: updatedTodo,
			};
		},
		removeTodo: (state: TodosState, action: PayloadAction<string>) => {
			const index = state.todo.findIndex((todo) => todo.id === action.payload);
			state.todo.splice(index, 1);
			localStorage.setItem('todos', JSON.stringify(state.todo));
		},
		updateTodo: (state, action: PayloadAction<TodosState>) => {},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice;

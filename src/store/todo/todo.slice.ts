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
	todo: [],
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState: TODO_INITIAL_STATE,
	reducers: {
		addTodo: (state, action) => {
			if (!action.payload.name) return;
			const todo = {
				id: v4(),
				name: action.payload.name,
				status: 'todo',
			};
			state.todo.push(todo);
			// const updatedTodo = [todo, ...state.todo];
			// return {
			// 	...state,
			// 	todo: updatedTodo,
			// };
		},
		removeTodo: (state, action) => {
			// const index = state.todo.findIndex((todo) => todo.id === action.payload);
			// state.todo.splice(index, 1);
			const filteringTodo = state.todo.filter((todo) => todo.id !== action.payload.id);

			return { ...state, todo: filteringTodo };
		},
		updateTodo: (state, action) => {
			const { id, status } = action.payload;
			const updatedTodo = state.todo.map((todo) => {
				if (todo.id != id) return todo;
				return {
					...todo,
					status: status,
				};
			});
			return {
				...state,
				todo: updatedTodo,
			};
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice;

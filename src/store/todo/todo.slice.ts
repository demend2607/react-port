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
		addTodo: (state = TODO_INITIAL_STATE, action: PayloadAction<TodoState>) => {
			if (!action.payload.name) return;
			const todo = {
				id: v4(),
				name: action.payload.name,
				status: 'todo',
			};

			const updatedTodo = [...state.todo, todo];

			return {
				...state,
				todo: updatedTodo,
			};
		},
		removeTodo: (state: TodosState, action: PayloadAction<string>) => {
			const index = state.todo.findIndex((todo) => todo.id === action.payload);
			state.todo.splice(index, 1);
		},
		updateTodo: (state, action: PayloadAction<TodoState>) => {
			const { id, status } = action.payload;
			const updateTodo = state.todo.map((todo) => {
				if (todo.id != id) return todo;
				return {
					...todo,
					status: status,
				};
			});
			return {
				...state,
				todo: updateTodo,
			};
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice;

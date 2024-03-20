import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TodosState } from './todo.slice';

const selectTodoReducer = (state: RootState): TodosState => state.todo;

export const selectTodoItems = createSelector([selectTodoReducer], (todo) => todo.todo);

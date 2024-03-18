import { combineReducers } from 'redux';

import themeReducer from './theme/theme.slice';
import todoReducer from './todo/todo.slice';

export const rootReducer = combineReducers({ themeReducer, todoReducer });

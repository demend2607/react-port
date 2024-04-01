import { combineReducers } from 'redux';

import themeSlice from './theme/theme.slice';
import todoSlice from './todo/todo.slice';
import infiniteScrollSlice from './infiniteScroll/infiniteScroll.slice';

export const rootReducer = combineReducers({
	theme: themeSlice.reducer,
	todo: todoSlice.reducer,
	infiniteScroll: infiniteScrollSlice.reducer,
});

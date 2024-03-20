import { createSlice } from '@reduxjs/toolkit';

export type ThemeState = {
	themeValue: string;
};

const THEME_INITIAL_STATE: ThemeState = {
	themeValue: localStorage.getItem('themeValue') || 'default',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState: THEME_INITIAL_STATE,
	reducers: {
		toggleTheme: (state) => {
			const themeValue = state.themeValue === 'default' ? 'custom' : 'default';
			localStorage.setItem('themeValue', themeValue);
			return { ...state, themeValue: themeValue };
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice;

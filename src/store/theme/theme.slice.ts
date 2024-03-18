import { createSlice } from '@reduxjs/toolkit';

export type ThemeState = {
	themeValue: string;
};

const THEME_INITIAL_STATE: ThemeState = {
	themeValue: 'default',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState: THEME_INITIAL_STATE,
	reducers: {
		toggleTheme: (state) => {
			const themeVaule = state.themeValue === 'default' ? 'custom' : 'default';
			return { ...state, themeValue: themeVaule };
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

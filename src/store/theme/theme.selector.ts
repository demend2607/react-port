import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { ThemeState } from './theme.slice';

const selectThemeReducer = (state: RootState): ThemeState => state.themeReducer;

export const selectThemeValue = createSelector([selectThemeReducer], (theme) => theme.themeValue);

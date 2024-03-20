import { configureStore, Tuple } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { PersistConfig } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import { rootReducer } from './root-reducer';

import { logger } from './middleWare/logger';
export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['theme'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: () => new Tuple(logger),
});

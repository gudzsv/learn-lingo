import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice.js';
import { initializeAuthListener } from './auth/operations.js';
import { teachersReducer } from './teachers/slice.js';

const persistConfig = {
	key: 'teachers',
	storage,
	whitelist: ['teachers'],
};

const rootReducer = combineReducers({
	auth: authReducer,
	teachers: teachersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

initializeAuthListener(store.dispatch);

export const persistor = persistStore(store);

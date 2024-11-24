import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.js';
import { initializeAuthListener } from './auth/operations.js';
import { teachersReducer } from './teachers/slice.js';

const store = configureStore({
	reducer: {
		auth: authReducer,
		teachers: teachersReducer,
	},
});

initializeAuthListener(store.dispatch);

export default store;

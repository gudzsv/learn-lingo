import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.js';
import { initializeAuthListener } from './auth/operations.js';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

initializeAuthListener(store.dispatch);

export default store;

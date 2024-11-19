//

import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from './operations.js';

const resetAuthState = (state) => {
	state.user = null;
	state.isLoading = false;
	state.isAuthenticated = false;
	state.error = null;
};

const initialState = {
	user: null,
	isLoading: false,
	isAuthenticated: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		clearUser: resetAuthState,
		clearError: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		const handlePending = (state) => {
			state.isLoading = true;
			state.error = null;
		};

		const handleRejected = (state, action) => {
			state.isLoading = false;
			state.error = action.payload || { message: 'Unexpected error' };
		};

		const handleFulfilled = (state, action) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		};

		builder
			.addCase(registerUser.pending, handlePending)
			.addCase(registerUser.fulfilled, handleFulfilled)
			.addCase(registerUser.rejected, handleRejected)

			.addCase(loginUser.pending, handlePending)
			.addCase(loginUser.fulfilled, handleFulfilled)
			.addCase(loginUser.rejected, handleRejected)

			.addCase(logoutUser.pending, handlePending)
			.addCase(logoutUser.fulfilled, (state) => {
				resetAuthState(state);
			})
			.addCase(logoutUser.rejected, handleRejected);
	},
});

export const { setUser, clearUser, clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;

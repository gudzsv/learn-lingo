import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './operations.js';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		isLoading: false,
		isLoggedIn: false,
		isSuccess: false,
		error: null,
	},
	reducers: {
		logout(state) {
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
				state.isSuccess = false;
				state.error = null;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.error = action.payload;
			});

		builder
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.isLoggedIn = false;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isLoggedIn = true;
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isLoggedIn = false;
				state.error = action.payload;
			});
	},
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getAllTeachers } from './operations.js';

const initialState = {
	items: [], // Масив для списку вчителів
	isLoading: false,
	error: null,
};

const teachersSlice = createSlice({
	name: 'teachers',
	initialState,

	extraReducers: (builder) => {
		const handlePending = (state) => {
			state.isLoading = true;
			state.error = null;
		};

		const handleFulfilled = (state, action) => {
			state.isLoading = false;
			state.items = action.payload; // Зберігаємо список
		};

		const handleRejected = (state, action) => {
			state.isLoading = false;
			state.error = action.payload || 'An unexpected error occurred.';
		};

		builder
			.addCase(getAllTeachers.pending, handlePending)
			.addCase(getAllTeachers.fulfilled, handleFulfilled)
			.addCase(getAllTeachers.rejected, handleRejected);
	},
});

export const teachersReducer = teachersSlice.reducer;

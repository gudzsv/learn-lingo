import { createSlice } from '@reduxjs/toolkit';
import { getAllTeachers, toggleFavorite } from './operations.js';
import { INITIAL_FILTER } from '../../constants/constants.js';

const initialState = {
	items: [],
	filter: INITIAL_FILTER,
	languageLevel: 'A1 Beginner',
	isLoading: false,
	error: null,
};

const teachersSlice = createSlice({
	name: 'teachers',
	initialState,

	reducers: {
		setFilter(state, action) {
			state.filter = action.payload;
		},
		resetFilter(state, action) {
			state.filter = action.payload;
		},
		setLanguageLevel(state, action) {
			state.languageLevel = action.payload;
		},
		updateFavorite(state, action) {
			state.items = toggleFavorite(state.items, action.payload);
		},
	},

	extraReducers: (builder) => {
		const handlePending = (state) => {
			state.isLoading = true;
			state.error = null;
		};

		const handleFulfilled = (state, action) => {
			state.isLoading = false;
			state.items = action.payload;
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

export const { setFilter, resetFilter, setLanguageLevel, updateFavorite } =
	teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;

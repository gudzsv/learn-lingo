import { get, getDatabase, ref } from 'firebase/database';
import { app } from '../../firebase/firebase.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTeachers = createAsyncThunk(
	'teachers/geyAllTeachers',
	async (_, { rejectWithValue }) => {
		try {
			const db = getDatabase(app);
			const dbRef = ref(db);
			const snapshot = await get(dbRef);

			if (snapshot.exists()) {
				const result = Object.values(snapshot.val());

				return result;
			} else {
				throw new Error('Teachers not found');
			}
		} catch (error) {
			return rejectWithValue(
				error instanceof Error ? error.message : String(error)
			);
		}
	}
);

export const toggleFavorite = (data, teacher) => {
	return data.map((item) =>
		item.id === teacher.id
			? { ...item, favorite: !item.favorite ?? false }
			: item
	);
};

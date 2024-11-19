import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import { clearUser, setUser } from './slice.js';

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async ({ email, password, name }, { rejectWithValue }) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateProfile(userCredential.user, { displayName: name });

			const loginCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = {
				uid: loginCredential.user.uid,
				email: loginCredential.user.email,
				displayName: loginCredential.user.displayName,
			};
			return user;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			return userCredential.user;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const logoutUser = createAsyncThunk(
	'auth/logoutUser',
	async (_, { rejectWithValue }) => {
		try {
			await signOut(auth);
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const initializeAuthListener = () => {
	return (dispatch, getState) => {
		onAuthStateChanged(auth, (user) => {
			const { user: currentUser } = getState().auth;

			if (user && (!currentUser || currentUser.uid !== user.uid)) {
				dispatch(
					setUser({
						uid: user.uid,
						email: user.email,
						displayName: user.displayName,
					})
				);
			} else if (!user && currentUser) {
				dispatch(clearUser());
			}
		});
	};
};

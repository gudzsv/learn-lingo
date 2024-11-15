import { auth } from './firebase.js';

import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	updatePassword,
} from 'firebase/auth';

export const createUser = async (name, email, password) => {
	return createUserWithEmailAndPassword(auth, name, email, password);
};

export const signIn = async (name, email, password) => {
	return signInWithEmailAndPassword(auth, name, email, password);
};

export const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	const result = await signInWithPopup(auth, provider);
	return result;
};

export const signOut = () => {
	return auth.signOut();
};

export const passwordReset = (email) => {
	return sendPasswordResetEmail(auth, email);
};

export const passwordChange = (password) => {
	return updatePassword(auth.currentUser, password);
};

export const sendEmailVerification = () => {
	return sendEmailVerification(auth.currentUser, {
		url: `${window.location.origin}/home`,
	});
};

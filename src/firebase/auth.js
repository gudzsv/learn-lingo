//

import {
	auth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	updatePassword,
	signOut as firebaseSignOut,
	sendEmailVerification as firebaseSendEmailVerification,
	updateProfile,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

export const createUser = async (email, password, name) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		await updateProfile(userCredential.user, { displayName: name });
		return userCredential;
	} catch (error) {
		console.error('Error creating user:', error.message);
		throw error;
	}
};

export const signIn = async (email, password) => {
	try {
		return await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error('Error signing in:', error.message);
		throw error;
	}
};

export const signInWithGoogle = async () => {
	try {
		return await signInWithPopup(auth, googleProvider);
	} catch (error) {
		console.error('Google sign-in error:', error.message);
		throw error;
	}
};

export const signOut = async () => {
	try {
		await firebaseSignOut(auth);
	} catch (error) {
		console.error('Error signing out:', error.message);
		throw error;
	}
};

export const passwordReset = async (email) => {
	try {
		return await sendPasswordResetEmail(auth, email);
	} catch (error) {
		console.error('Error sending password reset email:', error.message);
		throw error;
	}
};

export const updateUserPassword = async (password) => {
	if (!auth.currentUser) {
		throw new Error('No authenticated user');
	}

	try {
		return await updatePassword(auth.currentUser, password);
	} catch (error) {
		console.error('Error updating password:', error.message);
		throw error;
	}
};

export const sendEmailVerification = async () => {
	if (!auth.currentUser) {
		throw new Error('No authenticated user');
	}

	try {
		return await firebaseSendEmailVerification(auth.currentUser, {
			url: `${window.location.origin}/home`,
		});
	} catch (error) {
		console.error('Error sending email verification:', error.message);
		throw error;
	}
};

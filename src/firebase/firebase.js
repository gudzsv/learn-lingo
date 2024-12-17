import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDhQCRSr7AFQp23ddse8jZcHFd_i46CD0s',
	authDomain: 'learn-lingo-d1fd2.firebaseapp.com',
	databaseURL:
		'https://learn-lingo-d1fd2-default-rtdb.europe-west1.firebasedatabase.app/',
	projectId: 'learn-lingo-d1fd2',
	storageBucket: 'learn-lingo-d1fd2.firebasestorage.app',
	messagingSenderId: '714805126462',
	appId: '1:714805126462:web:767d01dc0e1d30b244386f',
	measurementId: 'G-66RWH9NDW4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };

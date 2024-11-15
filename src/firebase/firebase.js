// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDhQCRSr7AFQp23ddse8jZcHFd_i46CD0s',
	authDomain: 'learn-lingo-d1fd2.firebaseapp.com',
	projectId: 'learn-lingo-d1fd2',
	storageBucket: 'learn-lingo-d1fd2.firebasestorage.app',
	messagingSenderId: '714805126462',
	appId: '1:714805126462:web:767d01dc0e1d30b244386f',
	measurementId: 'G-66RWH9NDW4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ErrorMessage.module.scss';
import { clearError } from '../../../redux/auth/slice.js';

const ErrorMessage = ({ message }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(clearError());
		}, 5000);

		return () => clearTimeout(timeout);
	}, [dispatch]);

	return (
		<div className={styles.errorMessage}>
			<p>{message}</p>
			<button onClick={() => window.location.reload()}>Try Again</button>
		</div>
	);
};

export default ErrorMessage;

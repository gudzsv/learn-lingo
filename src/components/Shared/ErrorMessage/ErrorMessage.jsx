import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearError } from '../../../redux/auth/slice.js';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(clearError());
		}, 7000);

		return () => clearTimeout(timeout);
	}, [dispatch]);

	return (
		<div className={styles.errorMessage}>
			<p>{message}</p>
		</div>
	);
};

export default ErrorMessage;

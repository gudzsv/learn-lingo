import { useEffect } from 'react';
import styles from './Notification.module.scss';

const Notification = ({ message, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 5000);

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div className={styles.notification}>
			<p>{message}</p>
		</div>
	);
};

export default Notification;

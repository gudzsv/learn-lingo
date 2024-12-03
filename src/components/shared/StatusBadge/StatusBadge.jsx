import React from 'react';
import styles from './StatusBadge.module.scss';

const StatusBadge = ({ isActive }) => {
	return (
		<span
			className={`${styles.badge} ${
				isActive ? styles.active : styles.inactive
			}`}
			aria-label={isActive ? 'Online' : 'Offline'}
		></span>
	);
};

export default StatusBadge;

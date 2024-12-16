import clsx from 'clsx';
import styles from './StatusBadge.module.scss';

const StatusBadge = ({ isActive }) => {
	return (
		<span
			className={clsx(styles.badge, {
				[styles.active]: isActive,
				[styles.inactive]: !isActive,
			})}
			aria-label={isActive ? 'Online' : 'Offline'}
			role='status'
			aria-live='polite'
		></span>
	);
};

export default StatusBadge;

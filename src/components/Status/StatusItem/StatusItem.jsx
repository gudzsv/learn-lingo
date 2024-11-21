import clsx from 'clsx';
import styles from './StatusItem.module.scss';

const StatusItem = ({ title, text, className }) => {
	return (
		<li className={clsx(styles.statusItem, styles[className])}>
			<h2 className={styles.statusItemHead}>{title}</h2>
			<p className={styles.statusItemText}>{text}</p>
		</li>
	);
};

export default StatusItem;

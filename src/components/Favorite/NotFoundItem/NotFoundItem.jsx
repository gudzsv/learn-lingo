import styles from './NotFoundItem.module.scss';

const NoFoundItem = () => {
	return (
		<div className={styles.noTeachersContainer}>
			<p className={styles.message}>{'Nothing found in favorites'}</p>
		</div>
	);
};

export default NoFoundItem;

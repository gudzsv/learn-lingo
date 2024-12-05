import styles from './ReadMoreBtn.module.scss';

const ReadMoreBtn = ({ handleReadMore }) => {
	return (
		<button
			type='button'
			onClick={handleReadMore}
			className={styles.readMoreBtn}
		>
			ReadMore
		</button>
	);
};

export default ReadMoreBtn;

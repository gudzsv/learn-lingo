import styles from './TeacherName.module.scss';

const TeacherName = ({ fullName }) => {
	return (
		<div className={styles.teacherNameWrapper}>
			<span className={styles.teacherLanguage}>Languages</span>
			<h1 className={styles.teacherName}>{fullName}</h1>
		</div>
	);
};

export default TeacherName;

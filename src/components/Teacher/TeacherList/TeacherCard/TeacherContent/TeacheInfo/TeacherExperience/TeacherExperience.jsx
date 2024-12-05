import styles from './TeacherExperience.module.scss';

const TeacherExperience = ({ experience }) => {
	return <p className={styles.experience}>{experience}</p>;
};

export default TeacherExperience;

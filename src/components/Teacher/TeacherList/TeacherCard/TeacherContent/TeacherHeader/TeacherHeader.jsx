import TeacherName from './TeacherName/TeacherName.jsx';
import TeacherDetails from './TeacherDetails/TeacherDetails.jsx';
import styles from './TeacherHeader.module.scss';

const TeacherHeader = ({ teacher, teacherFullName }) => {
	return (
		<header className={styles.teacherHeader}>
			<TeacherName fullName={teacherFullName} />
			<TeacherDetails teacher={teacher} />
		</header>
	);
};

export default TeacherHeader;

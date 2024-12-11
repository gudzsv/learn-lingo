import styles from './TeacherCard.module.scss';
import TeacherAvatar from './TeacherAvatar/TeacherAvatar.jsx';
import TeacherContent from './TeacherContent/TeacherContent.jsx';

const TeacherCard = ({ teacher, teacherId }) => {
	const teacherFullName = teacher.name + ' ' + teacher.surname;

	return (
		<section className={styles.teacherCard}>
			<TeacherAvatar
				avatarUrl={teacher.avatar_url}
				fullName={teacherFullName}
			/>
			<TeacherContent
				teacher={teacher}
				teacherId={teacherId}
				teacherFullName={teacherFullName}
			/>
		</section>
	);
};

export default TeacherCard;

import styles from './TeacherCard.module.scss';
import TeacherAvatar from './TeacherAvatar/TeacherAvatar.jsx';
import TeacherContent from './TeacherContent/TeacherContent.jsx';

const TeacherCard = ({ teacher }) => {
	const teacherFullName = useMemo(
		() => `${teacher.name} ${teacher.surname}`,
		[teacher.name, teacher.surname]
	);

	return (
		<section className={styles.teacherCard}>
			<TeacherAvatar
				avatarUrl={teacher.avatar_url}
				fullName={teacherFullName}
			/>
			<TeacherContent
				teacher={teacher}
				teacherId={teacher.id}
				teacherFullName={teacherFullName}
			/>
		</section>
	);
};

export default TeacherCard;

import TeacherAvatar from './TeacherAvatar/TeacherAvatar.jsx';
import TeacherContent from './TeacherContent/TeacherContent.jsx';
import { useMemo } from 'react';
import styles from './TeacherCard.module.scss';

const TeacherCard = ({ teacher }) => {
	const teacherFullName = useMemo(
		() => `${teacher.name} ${teacher.surname}`,
		[teacher.name, teacher.surname]
	);

	return (
		<div className={styles.teacherCard}>
			<TeacherAvatar
				avatarUrl={teacher.avatar_url}
				fullName={teacherFullName}
			/>
			<TeacherContent teacher={teacher} teacherFullName={teacherFullName} />
		</div>
	);
};

export default TeacherCard;

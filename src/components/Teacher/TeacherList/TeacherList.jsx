import React from 'react';
import TeacherCard from './TeacherCard/TeacherCard.jsx';
import styles from './TeacherList.module.scss';

const TeacherList = React.memo(({ teachers }) => {
	return (
		<ul className={styles.teacherList}>
			{teachers.map((teacher) => (
				<li className={styles.teacherItem} key={teacher.id}>
					<TeacherCard teacher={teacher} />
				</li>
			))}
		</ul>
	);
});

export default TeacherList;

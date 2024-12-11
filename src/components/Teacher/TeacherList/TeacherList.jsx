import TeacherCard from './TeacherCard/TeacherCard.jsx';
import styles from './TeacherList.module.scss';

const TeacherList = ({ teachers }) => {
	return (
		<ul className={styles.teacherList}>
			{teachers.map((teacher, idx) => (
				<li className={styles.teacherItem} key={teacher.id}>
					<TeacherCard teacher={teacher} teacherId={teacher.id} />
				</li>
			))}
		</ul>
	);
};

export default TeacherList;

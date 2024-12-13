import TeacherExperience from './TeacherExperience/TeacherExperience.jsx';
import TeacherInfoList from './TeacherInfoList/TeacherInfoList.jsx';
import styles from './TeacherInfo.module.scss';
import ReadMoreBtn from '../../../../../Shared/Button/ReadMoreBtn/ReadMoreBtn.jsx';

const TeacherInfo = ({ teacher, isHidden, handleReadMore }) => {
	return (
		<div className={styles.teacherInfoWrapper}>
			<TeacherInfoList teacher={teacher} />
			{!isHidden ? (
				<TeacherExperience experience={teacher.experience} />
			) : (
				<ReadMoreBtn handleReadMore={handleReadMore} />
			)}
		</div>
	);
};

export default TeacherInfo;

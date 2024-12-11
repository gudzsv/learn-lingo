import { useState } from 'react';
import TeacherHeader from './TeacherHeader/TeacherHeader.jsx';
import TeacherInfo from './TeacheInfo/TeacherInfo.jsx';
import Reviews from '../../../../shared/Reviews/Reviews.jsx';
import LanguageLevels from '../../../../shared/LanguageLevel/LanguageLevels.jsx';
import Button from '../../../../shared/Button/Button.jsx';
import styles from './TeacherContent.module.scss';

const TeacherContent = ({ teacher, teacherId, teacherFullName }) => {
	const [isHidden, setIsHidden] = useState(true);

	const handleReadMore = () => {
		setIsHidden((prev) => !prev);
	};

	return (
		<div className={styles.teacherContent}>
			<TeacherHeader teacher={teacher} teacherFullName={teacherFullName} />
			<TeacherInfo
				teacher={teacher}
				isHidden={isHidden}
				handleReadMore={handleReadMore}
			/>

			{!isHidden && <Reviews reviews={teacher.reviews} />}

			<LanguageLevels
				levels={teacher.levels}
				groupName={`teacher-${teacherId}`}
			/>

			{!isHidden && <Button text={'Book trial lesson'} className={'bookBtn'} />}
		</div>
	);
};

export default TeacherContent;

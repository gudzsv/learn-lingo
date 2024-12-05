import { useState } from 'react';
import TeacherHeader from './TeacherHeader/TeacherHeader.jsx';
import TeacherInfo from './TeacheInfo/TeacherInfo.jsx';
import Reviews from '../../../../shared/Reviews/Reviews.jsx';
import LanguageLevels from '../../../../shared/LanguageLevel/LanguageLevels.jsx';
import Button from '../../../../shared/Button/Button.jsx';
import styles from './TeacherContent.module.scss';

const TeacherContent = ({ teacher, teacherFullName }) => {
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

			<LanguageLevels levels={teacher.levels} />

			{!isHidden && <Button text={'Book trial lesson'} />}
		</div>
	);
};

export default TeacherContent;

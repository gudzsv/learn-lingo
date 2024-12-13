import { useCallback, useState } from 'react';
import TeacherHeader from './TeacherHeader/TeacherHeader.jsx';
import TeacherInfo from './TeacheInfo/TeacherInfo.jsx';
import Reviews from '../../../../Shared/Reviews/Reviews.jsx';
import LanguageLevels from '../../../../Shared/LanguageLevel/LanguageLevels.jsx';
import Button from '../../../../Shared/Button/Button.jsx';
import styles from './TeacherContent.module.scss';

const TeacherContent = ({ teacher, teacherFullName }) => {
	const [isHidden, setIsHidden] = useState(true);

	const handleReadMore = useCallback(() => {
		setIsHidden((prev) => !prev);
	}, []);

	const renderReviews = useCallback(() => {
		if (teacher.reviews && !isHidden) {
			return <Reviews reviews={teacher.reviews} />;
		}
	}, [teacher.reviews, isHidden]);

	const renderButton = useCallback(() => {
		if (!isHidden) {
			return (
				<Button
					text='Book trial lesson'
					className='bookBtn'
					ariaLabel='Book a trial lesson with the teacher'
				/>
			);
		}
	}, [isHidden]);

	return (
		<div className={styles.teacherContent}>
			<TeacherHeader teacher={teacher} teacherFullName={teacherFullName} />
			<TeacherInfo
				teacher={teacher}
				isHidden={isHidden}
				handleReadMore={handleReadMore}
			/>

			{renderReviews()}

			<LanguageLevels
				levels={teacher.levels}
				groupName={`teacher-${teacher.id}`}
			/>

			{renderButton()}
		</div>
	);
};

export default TeacherContent;

import { useCallback, useState } from 'react';
import TeacherHeader from './TeacherHeader/TeacherHeader.jsx';
import TeacherInfo from './TeacherInfo/TeacherInfo.jsx';
import Reviews from '../../../../Shared/Reviews/Reviews.jsx';
import LanguageLevels from '../../../../Shared/LanguageLevel/LanguageLevels.js';
import Button from '../../../../Shared/Button/Button.jsx';
import styles from './TeacherContent.module.scss';
import ModalRoot from '../../../../Shared/Modal/ModalRoot/ModalRoot.js';
import ModalTemplate from '../../../../Shared/Modal/ModalTemplate/ModalTemplate.jsx';
import BookTrialForm from '../../../../Shared/Form/BookTrialForm/BookTrialForm.jsx';

const TeacherContent = ({ teacher, teacherFullName }) => {
	const [isHidden, setIsHidden] = useState(true);
	const [isOpenModal, setIsOpenModel] = useState(false);

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

	const handleOpenCloseModal = () => {
		setIsOpenModel((prev) => !prev);
	};

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

			<ModalRoot isOpen={isOpenModal} onClose={handleOpenCloseModal}>
				<ModalTemplate
					title={'Book trial lesson'}
					message={
						'Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.'
					}
				>
					<BookTrialForm />
				</ModalTemplate>
			</ModalRoot>
		</div>
	);
};

export default TeacherContent;

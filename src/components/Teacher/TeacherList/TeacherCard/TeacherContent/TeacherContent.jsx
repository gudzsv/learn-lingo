import { useCallback, useState } from 'react';
import { MODAL_CONFIG } from '../../../../../constants/constants.js';
import useModal from '../../../../../hooks/useModal.js';
import Button from '../../../../Shared/Button/Button.jsx';
import BookTrialForm from '../../../../Shared/Form/BookTrialForm/BookTrialForm';
import LanguageLevels from '../../../../Shared/LanguageLevel/LanguageLevels.jsx';
import ModalRoot from '../../../../Shared/Modal/ModalRoot/ModalRoot.jsx';
import ModalTemplate from '../../../../Shared/Modal/ModalTemplate/ModalTemplate.jsx';
import Reviews from '../../../../Shared/Reviews/Reviews.jsx';
import styles from './TeacherContent.module.scss';
import TeacherHeader from './TeacherHeader/TeacherHeader.jsx';
import TeacherInfo from './TeacherInfo/TeacherInfo.jsx';

const {
	bookLesson: { title, message },
} = MODAL_CONFIG;

const TeacherContent = ({ teacher, teacherFullName }) => {
	const [isHidden, setIsHidden] = useState(true);

	const { isOpen, toggleModal } = useModal();

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
					onClick={toggleModal}
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

			<ModalRoot isOpen={isOpen} onClose={toggleModal}>
				<ModalTemplate title={title} message={message}>
					<BookTrialForm teacher={teacher} teacherFullName={teacherFullName} />
				</ModalTemplate>
			</ModalRoot>
		</div>
	);
};

export default TeacherContent;

import { useCallback, useMemo, useState } from 'react';
import { MODAL_CONFIG } from '../../../../../constants/constants.js';
import useModal from '../../../../../hooks/useModal.js';
import Button from '../../../../Shared/Button/Button.jsx';
import BookTrialForm from '../../../../Shared/Form/BookTrialForm/BookTrialForm';
import LanguageLevels from '../../../../Shared/LanguageLevel/LanguageLevels.jsx';
import ModalRoot from '../../../../Shared/Modal/ModalRoot/ModalRoot.jsx';
import ModalTemplate from '../../../../Shared/Modal/ModalTemplate/ModalTemplate.jsx';
import Notification from '../../../../Shared/Notification/Notification.jsx';
import Reviews from '../../../../Shared/Reviews/Reviews.jsx';
import styles from './TeacherContent.module.scss';
import TeacherHeader from './TeacherHeader/TeacherHeader.jsx';
import TeacherInfo from './TeacherInfo/TeacherInfo.jsx';

const {
	bookLesson: { title, message: modalMessage },
} = MODAL_CONFIG;

const TeacherContent = ({ teacher, teacherFullName }) => {
	const [isHidden, setIsHidden] = useState(true);
	const [showNotification, setShowNotification] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState('');

	const { isOpen, toggleModal } = useModal();

	const handleReadMore = useCallback(() => {
		setIsHidden((prev) => !prev);
	}, []);

	const handleNotification = useCallback(() => {
		setShowNotification((prev) => !prev);
	}, []);

	const handleGenerateMessage = useCallback(({ name, email, phone }) => {
		const message = `Hello ${name}, thank you for booking the teacher! We will reach out to you soon via phone at ${phone} or email at ${email}.`;
		setNotificationMessage(message);
		setShowNotification(true);
	}, []);

	const renderReviews = useMemo(() => {
		if (teacher.reviews && !isHidden) {
			return <Reviews reviews={teacher.reviews} />;
		}
		return null;
	}, [teacher.reviews, isHidden]);

	const renderButton = useMemo(() => {
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
		return null;
	}, [isHidden, toggleModal]);

	return (
		<div className={styles.teacherContent}>
			<TeacherHeader teacher={teacher} teacherFullName={teacherFullName} />
			<TeacherInfo
				teacher={teacher}
				isHidden={isHidden}
				handleReadMore={handleReadMore}
			/>

			{renderReviews}

			<LanguageLevels
				levels={teacher.levels}
				groupName={`teacher-${teacher.id}`}
			/>

			{renderButton}

			<ModalRoot isOpen={isOpen} onClose={toggleModal}>
				<ModalTemplate title={title} message={modalMessage}>
					<BookTrialForm
						teacher={teacher}
						teacherFullName={teacherFullName}
						onCloseModal={toggleModal}
						onNotify={handleGenerateMessage}
					/>
				</ModalTemplate>
			</ModalRoot>

			{showNotification && (
				<Notification
					message={notificationMessage}
					onClose={handleNotification}
				/>
			)}
		</div>
	);
};

export default TeacherContent;

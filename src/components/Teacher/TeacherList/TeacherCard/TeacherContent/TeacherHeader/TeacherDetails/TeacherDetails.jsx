import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_CONFIG } from '../../../../../../../constants/constants.js';
import useModal from '../../../../../../../hooks/useModal.js';
import { selectIsAuthenticated } from '../../../../../../../redux/auth/selectors.js';
import { updateFavorite } from '../../../../../../../redux/teachers/slice.js';
import FavoriteButton from '../../../../../../Shared/Button/FavoriteButton/FavoriteButton.jsx';
import ModalRoot from '../../../../../../Shared/Modal/ModalRoot/ModalRoot.jsx';
import ModalTemplate from '../../../../../../Shared/Modal/ModalTemplate/ModalTemplate.jsx';
import DetailsItem from './DetailsItem/DetailsItem.jsx';
import styles from './TeacherDetails.module.scss';

const {
	favoriteInfo: { title, message },
} = MODAL_CONFIG;
const TeacherDetails = ({ teacher }) => {
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const { isOpen, toggleModal } = useModal();

	const dispatch = useDispatch();

	const handleToggleFavorite = useCallback(() => {
		if (!isAuthenticated) {
			toggleModal();
			return;
		}
		dispatch(updateFavorite(teacher));
	}, [dispatch, isAuthenticated, teacher, toggleModal]);

	return (
		<div className={styles.teacherDetails}>
			<dl className={styles.detailsList}>
				<DetailsItem
					icon='book'
					title=''
					value='Lessons online'
					iconWidth='16'
					iconHeight='16'
				/>
				<DetailsItem
					title='Lessons done:'
					value={
						<data value={teacher.lessons_done}>{teacher.lessons_done}</data>
					}
				/>
				<DetailsItem
					icon='star'
					title='Rating:'
					value={<data value={teacher.rating}>{teacher.rating}</data>}
					iconWidth='16'
					iconHeight='16'
				/>
				<DetailsItem
					title='Price / 1 hour:'
					value={
						<data value={teacher.price_per_hour}>
							{teacher.price_per_hour} $
						</data>
					}
					className={styles.detailsPrice}
				/>
			</dl>
			<div className={styles.favoriteButtonWrapper}>
				<FavoriteButton
					onClick={handleToggleFavorite}
					isFavorite={teacher?.favorite}
					ariaLabel={
						teacher.favorite ? 'Remove from favorites' : 'Add to favorites'
					}
				/>
			</div>

			<ModalRoot isOpen={isOpen} onClose={toggleModal}>
				<ModalTemplate title={title} message={message} />
			</ModalRoot>
		</div>
	);
};

export default TeacherDetails;

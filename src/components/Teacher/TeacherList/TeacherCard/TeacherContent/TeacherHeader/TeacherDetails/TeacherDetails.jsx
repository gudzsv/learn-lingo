import Icon from '../../../../../../shared/Icon/Icon.jsx';
import FavoriteButton from '../../../../../../shared/Button/FavoriteButton/FavoriteButton.jsx';
import styles from './TeacherDetails.module.scss';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredTeachers } from '../../../../../../../redux/teachers/selectors.js';
import { updateFavorite } from '../../../../../../../redux/teachers/slice.js';

const TeacherDetails = ({ teacher }) => {
	const teachers = useSelector(selectFilteredTeachers);

	const dispatch = useDispatch();

	const handleToggleFavorite = () => {
		dispatch(updateFavorite(teacher));
	};

	return (
		<div className={styles.teacherDetails}>
			<dl className={styles.detailsList}>
				<div className={styles.detailsItem}>
					<dt className={styles.detailsTitle}>
						<div className={styles.detailIcon}>
							<Icon iconName='book' width='16' height='16' aria-hidden='true' />
						</div>
					</dt>
					<dd className={styles.detailsValue}>Lessons online</dd>
				</div>

				<div className={styles.detailsItem}>
					<dt className={styles.detailsTitle}>Lessons done:</dt>
					<dd className={styles.detailsValue}>
						<data value={teacher.lessons_done}>{teacher.lessons_done}</data>
					</dd>
				</div>

				<div className={styles.detailsItem}>
					<dt className={styles.detailsTitle}>
						<div className={styles.detailIcon}>
							<Icon iconName='star' width='16' height='16' aria-hidden='true' />
						</div>
						<span>Rating:</span>
					</dt>
					<dd className={styles.detailsValue}>
						<data value={teacher.rating}>{teacher.rating}</data>
					</dd>
				</div>

				<div className={styles.detailsItem}>
					<dt className={styles.detailsTitle}>Price / 1 hour:</dt>
					<dd className={`${styles.detailsValue} ${styles.detailsPrice}`}>
						<data value={teacher.price_per_hour}>
							{teacher.price_per_hour} $
						</data>
					</dd>
				</div>
			</dl>
			<div className={styles.favoriteButtonWrapper}>
				<FavoriteButton
					onClick={handleToggleFavorite}
					isFavorite={teacher?.favorite}
				/>
			</div>
		</div>
	);
};

export default TeacherDetails;

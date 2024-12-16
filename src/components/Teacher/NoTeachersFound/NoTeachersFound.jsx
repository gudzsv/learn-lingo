import { useDispatch } from 'react-redux';
import { INITIAL_FILTER } from '../../../constants/constants.js';
import { resetFilter } from '../../../redux/teachers/slice.js';
import Button from '../../Shared/Button/Button.jsx';
import styles from './NoTeachersFound.module.scss';

const NoTeachersFound = ({
	message = 'No teachers match your criteria. Please adjust the filters and try again.',
}) => {
	const dispatch = useDispatch();
	const handleResetFilters = () => {
		dispatch(resetFilter(INITIAL_FILTER));
	};
	return (
		<div className={styles.noTeachersContainer}>
			<p className={styles.message}>{message}</p>
			<Button text=' Reset Filters' onClick={handleResetFilters} />
		</div>
	);
};

export default NoTeachersFound;

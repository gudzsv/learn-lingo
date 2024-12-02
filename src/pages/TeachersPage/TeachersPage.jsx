import FilterForm from './FilterForm/FilterForm.jsx';
import styles from './TeachersPage.module.scss';
import Container from '../../components/Shared/Container/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeachers } from '../../redux/teachers/operations.js';
import { selectAllTeachers } from '../../redux/teachers/selectors.js';
// import Dropdown from '../../components/shared/Dropdown/Dropdown.jsx';

const TeachersPage = () => {
	const dispatch = useDispatch();
	const teachers = useSelector(selectAllTeachers);
	console.log('teachers: ', teachers);

	useEffect(() => {
		dispatch(getAllTeachers());
	}, []);

	return (
		<div className={styles.teachersPage}>
			<Container>
				<FilterForm />
			</Container>
		</div>
	);
};

export default TeachersPage;

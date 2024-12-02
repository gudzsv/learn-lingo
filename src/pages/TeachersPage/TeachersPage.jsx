import FilterForm from './FilterForm/FilterForm.jsx';
import styles from './TeachersPage.module.scss';
import Container from '../../components/Shared/Container/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeachers } from '../../redux/teachers/operations.js';
import { selectAllTeachers } from '../../redux/teachers/selectors.js';
import TeacherCard from '../../components/shared/TeacherCard/TeacherCard.jsx';
// import Dropdown from '../../components/shared/Dropdown/Dropdown.jsx';
import Loader from '../../components/shared/Loader/Loader';

const TeachersPage = () => {
	const dispatch = useDispatch();
	const teachers = useSelector(selectAllTeachers);

	useEffect(() => {
		if (!teachers || teachers.length === 0) {
			dispatch(getAllTeachers());
		}
	}, []);

	return (
		<div className={styles.teachersPage}>
			<Container>
				{!teachers ? (
					<Loader />
				) : (
					<>
						<FilterForm />
						<TeacherCard teachers={teachers} />
					</>
				)}
			</Container>
		</div>
	);
};

export default TeachersPage;

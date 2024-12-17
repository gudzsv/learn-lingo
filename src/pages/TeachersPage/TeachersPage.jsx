import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Shared/Container/Container.jsx';
import Teacher from '../../components/Teacher/Teacher.jsx';
import { getAllTeachers } from '../../redux/teachers/operations.js';
import { selectFilteredTeachers } from '../../redux/teachers/selectors.js';
import styles from './TeachersPage.module.scss';

const TeachersPage = () => {
	const dispatch = useDispatch();
	const filteredTeacher = useSelector(selectFilteredTeachers);

	useEffect(() => {
		if (!filteredTeacher || filteredTeacher.length === 0) {
			dispatch(getAllTeachers());
		}
	}, []);

	return (
		<div className={styles.teachersPage}>
			<Helmet>
				<title>{'Teachers'}</title>
			</Helmet>
			<Container>
				<Teacher teachers={filteredTeacher} />
			</Container>
		</div>
	);
};

export default TeachersPage;

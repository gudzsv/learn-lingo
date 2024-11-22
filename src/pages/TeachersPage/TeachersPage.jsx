import FilterForm from './FilterForm/FilterForm.jsx';
import styles from './TeachersPage.module.scss';
import Container from '../../components/Shared/Container/Container';

const TeachersPage = () => {
	return (
		<div className={styles.teachersPage}>
			<Container>
				<FilterForm />
			</Container>
		</div>
	);
};

export default TeachersPage;

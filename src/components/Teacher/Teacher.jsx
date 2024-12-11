import FilterForm from './FilterForm/FilterForm.jsx';
import NoTeachersFound from './NoTeachersFound/NoTeachersFound.jsx';
import TeacherList from './TeacherList/TeacherList.jsx';

const Teacher = ({ teachers }) => {
	return (
		<section>
			<FilterForm />
			{teachers && teachers.length > 0 ? (
				<TeacherList teachers={teachers} />
			) : (
				<NoTeachersFound />
			)}
		</section>
	);
};

export default Teacher;

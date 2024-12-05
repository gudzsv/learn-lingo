import React from 'react';
import FilterForm from './FilterForm/FilterForm.jsx';
import TeacherList from './TeacherList/TeacherList.jsx';

const Teacher = ({ teachers }) => {
	return (
		<div>
			<FilterForm />
			<TeacherList teachers={teachers} />
		</div>
	);
};

export default Teacher;

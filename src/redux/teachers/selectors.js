import { createSelector } from '@reduxjs/toolkit';

export const selectAllTeachers = (state) => state.teachers.items;
export const selectTeachersLoading = (state) => state.teachers.isLoading;
export const selectTeachersError = (state) => state.teachers.error;

export const selectTeacherById = (id) =>
	createSelector([selectFilteredTeachers], (teachers) =>
		teachers.find((teacher) => teacher.id === id)
	);

export const selectFilters = (state) => state.teachers.filter;

export const selectFilteredTeachers = createSelector(
	[selectAllTeachers, selectFilters],
	(teachers, filter) => {
		const filteredTeacher = teachers.filter(
			(teacher) =>
				teacher.languages.includes(filter.languages) &&
				teacher.levels.includes(filter.levels) &&
				teacher.price_per_hour <= Number(filter.price_per_hour)
		);
		return filteredTeacher;
	}
);

export const selectLanguageLevel = (state) => state.teachers.languageLevel;

import { useMemo, useState } from 'react';
import { INITIAL_VISIBLE_CARDS } from '../../constants/constants.js';
import Button from '../Shared/Button/Button.jsx';
import FilterForm from './FilterForm/FilterForm.jsx';
import NoTeachersFound from './NoTeachersFound/NoTeachersFound.jsx';
import styles from './Teacher.module.scss';
import TeacherList from './TeacherList/TeacherList.jsx';

const Teacher = ({ teachers }) => {
	const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);

	const handleLoadMore = () => {
		setVisibleCards((prevCount) => prevCount + INITIAL_VISIBLE_CARDS);
	};

	const hasMore = useMemo(
		() => visibleCards < teachers.length,
		[visibleCards, teachers.length]
	);

	const visibleTeachers = useMemo(() => {
		console.log(
			'teachers.slice(0, visibleCards): ',
			teachers.slice(0, visibleCards)
		);
		return teachers.slice(0, visibleCards);
	}, [teachers, visibleCards]);

	return (
		<section className={styles.teacherSection}>
			<FilterForm />
			{teachers && teachers.length > 0 ? (
				<TeacherList teachers={visibleTeachers} />
			) : (
				<NoTeachersFound />
			)}
			{hasMore && (
				<Button
					text='Load more'
					className={'loadMore'}
					onClick={handleLoadMore}
				/>
			)}
		</section>
	);
};

export default Teacher;

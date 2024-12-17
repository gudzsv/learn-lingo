import { useSelector } from 'react-redux';
import { selectFavoriteTeachers } from '../../redux/teachers/selectors.js';
import TeacherList from '../Teacher/TeacherList/TeacherList.jsx';

const Favorite = () => {
	const favorite = useSelector(selectFavoriteTeachers);
	return <TeacherList teachers={favorite} />;
};

export default Favorite;

import { useSelector } from 'react-redux';
import { selectFavoriteTeachers } from '../../redux/teachers/selectors.js';
import TeacherList from '../Teacher/TeacherList/TeacherList.jsx';
import NoFoundItem from './NotFoundItem/NotFoundItem.jsx';

const Favorite = () => {
	const favorite = useSelector(selectFavoriteTeachers);
	if (favorite.length < 1) {
		return <NoFoundItem />;
	}
	return <TeacherList teachers={favorite} />;
};

export default Favorite;

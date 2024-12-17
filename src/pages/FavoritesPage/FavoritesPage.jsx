import { Helmet } from 'react-helmet-async';
import Favorite from '../../components/Favorite/Favorite.jsx';
import Container from '../../components/Shared/Container/Container.jsx';
import styles from './FavoritePage.module.scss';

const FavoritesPage = () => {
	return (
		<div className={styles.favoritePage}>
			<Helmet>
				<title>{'Favorites'}</title>
			</Helmet>
			<Container>
				<Favorite />
			</Container>
		</div>
	);
};

export default FavoritesPage;

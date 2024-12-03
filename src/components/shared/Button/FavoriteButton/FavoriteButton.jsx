import Icon from '../../Icon/Icon.jsx';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = () => {
	return (
		<button className={styles.favoriteButton} aria-label='Add to favorites'>
			<Icon iconName='favorite' width='26' height='26' />
		</button>
	);
};

export default FavoriteButton;

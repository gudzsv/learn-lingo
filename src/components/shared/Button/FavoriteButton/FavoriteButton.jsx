import Icon from '../../Icon/Icon.jsx';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({ onClick, isFavorite, ariaLabel }) => {
	return (
		<button
			className={styles.favoriteButton}
			aria-label={ariaLabel}
			onClick={onClick}
		>
			<Icon
				iconName='favorite'
				width='26'
				height='26'
				className='favorite'
				isActive={isFavorite}
			/>
		</button>
	);
};

export default FavoriteButton;

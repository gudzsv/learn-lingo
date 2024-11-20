import Icon from '../../Icon/Icon.jsx';
import styles from './BurgerBtn.module.scss';

const BurgerBtn = ({ onClick }) => (
	<button className={styles.mobMenu} aria-label='Burger menu' onClick={onClick}>
		<Icon iconName={'menu'} width={18} height={18} className={'iconMenu'} />
	</button>
);

export default BurgerBtn;

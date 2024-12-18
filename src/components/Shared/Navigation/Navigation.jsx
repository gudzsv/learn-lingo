import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = ({ isAuthenticated, closeMenu, isBurger }) => {
	const renderNavLink = (to, label, onClick) => (
		<li className={styles.navItem}>
			<NavLink
				to={to}
				className={({ isActive }) =>
					clsx(styles.link, { [styles.active]: isActive })
				}
				onClick={onClick ? onClick : null}
			>
				{label}
			</NavLink>
		</li>
	);

	return (
		<nav className={styles.navigation} aria-label='Primary navigation'>
			<ul className={isBurger ? styles.navListMobile : styles.navList}>
				{renderNavLink('/', 'Home', isBurger ? closeMenu : null)}
				{renderNavLink('/teachers', 'Teachers', isBurger ? closeMenu : null)}
				{isAuthenticated &&
					renderNavLink('/favorites', 'Favorites', isBurger ? closeMenu : null)}
			</ul>
		</nav>
	);
};

export default Navigation;

import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Header.module.scss';
import { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu.jsx';
import Logo from '../Logo/Logo.jsx';

const activeClass = ({ isActive }) => {
	return isActive ? styles.active : styles.link;
};

const isAuthenticated = true;

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleToggleMenu = () => {
		setIsOpenMenu((prev) => !prev);
	};

	return (
		<header className={styles.header}>
			<div className={styles.navWrapper}>
				<Logo />
				<nav className={styles.navigation} aria-label='Primary navigation'>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<NavLink to='/' className={activeClass}>
								Home
							</NavLink>
						</li>
						{isAuthenticated && (
							<li className={styles.navItem}>
								<NavLink to='/teachers' className={activeClass}>
									Teachers
								</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</div>

			<div className={styles.authContainer}>
				<button type='button' className={styles.loginBtn}>
					<Icon iconName='login' width={20} height={20} />
					Log in
				</button>
				<button type='button' className={styles.registrationBtn}>
					Registration
				</button>
			</div>
			<button
				className={styles.mobMenu}
				aria-label='open, close menu button'
				onClick={handleToggleMenu}
			>
				<Icon
					iconName={'menu'}
					width={18}
					height={18}
					className={'menu'}
					role='button'
				/>
			</button>

			{isOpenMenu && <MobileMenu closeMenu={handleToggleMenu} />}
		</header>
	);
};

export default Header;

import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Header.module.scss';
import { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import { ModalRoot, ModalTemplate } from '../Modal/index.js';

const activeClass = ({ isActive }) => (isActive ? styles.active : styles.link);

const isAuthenticated = true;

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const [isSignOutOpen, setIsSignOutOpen] = useState(false);

	const handleSignOutClick = () => {
		setIsSignOutOpen(true);
	};

	const handleCloseModal = () => {
		setIsSignOutOpen(false);
	};

	const handleConfirmSignOut = () => {
		console.log('User signed out');
		setIsSignOutOpen(false);
	};

	const handleToggleMenu = () => setIsOpenMenu((prev) => !prev);

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
						<li className={styles.navItem}>
							<NavLink to='/teachers' className={activeClass}>
								Teachers
							</NavLink>
						</li>
						{isAuthenticated && (
							<li className={styles.navItem}>
								<NavLink to='/favorites' className={activeClass}>
									Favorites
								</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</div>

			<nav className={styles.authContainer} aria-label='Authentication options'>
				<button type='button' className={styles.loginBtn} aria-label='Log in'>
					<Icon iconName='login' width={20} height={20} />
					Log in
				</button>
				<button
					type='button'
					className={styles.registrationBtn}
					aria-label='Register'
					onClick={handleSignOutClick}
				>
					Registration
				</button>
			</nav>

			<button
				className={styles.mobMenu}
				aria-label='Toggle menu'
				onClick={handleToggleMenu}
			>
				<Icon iconName='menu' width={18} height={18} className={'conMenu'} />
			</button>

			{isOpenMenu && <MobileMenu closeMenu={handleToggleMenu} />}
			<ModalRoot isOpen={isSignOutOpen} onClose={handleCloseModal}>
				<ModalTemplate
					title='Sign Out'
					message='Are you sure you want to sign out?'
					onConfirm={handleConfirmSignOut}
					onCancel={handleCloseModal}
				/>
			</ModalRoot>
		</header>
	);
};

export default Header;

import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Header.module.scss';
import { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import { ModalRoot, ModalTemplate } from '../Modal/index.js';
import SignUpForm from '../Form/SignUpForm/SignUpForm.jsx';

const activeClass = ({ isActive }) => (isActive ? styles.active : styles.link);

const isAuthenticated = true;

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const [isSignOutOpen, setIsSignOutOpen] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const [isSuccess, setIsSuccess] = useState(false);

	const handleSignOutClick = () => {
		setIsSignOutOpen(true);
	};

	const handleCloseModal = () => {
		setIsSignOutOpen(false);
	};

	const handleConfirmSignOut = (data) => {
		setIsSuccess(false);
		setIsLoading(true);
		setTimeout(() => {
			console.log('User signed out', data.email);
			setIsLoading(false);
			setIsSuccess(true);
			setIsSignOutOpen(false); // Закриваємо модалку після завершення
		}, 2000);
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

			<ModalRoot
				isOpen={isSignOutOpen}
				onClose={handleCloseModal}
				isSuccess={isSuccess}
			>
				<ModalTemplate
					title={'Registration'}
					message={
						'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'
					}
					isLoading={isLoading}
					// onSubmit={handleConfirmSignOut}
					// onCancel={handleCloseModal}
				>
					<SignUpForm onSubmit={handleConfirmSignOut} />
				</ModalTemplate>
			</ModalRoot>
		</header>
	);
};

export default Header;

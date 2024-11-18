import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import { ModalRoot, ModalTemplate } from '../Modal/index.js';
import SignUpForm from '../Form/SignUpForm/SignUpForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/auth/operations.js';
import {
	selectIsLoading,
	selectIsSuccess,
} from '../../redux/auth/selectors.js';

const activeClass = ({ isActive }) => (isActive ? styles.active : styles.link);

const isAuthenticated = true;

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const [isSignOutOpen, setIsSignOutOpen] = useState(false);

	// const [isLoading, setIsLoading] = useState(false);

	// const [isSuccess, setIsSuccess] = useState(false);

	const isSuccess = useSelector(selectIsSuccess);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();

	const handleSignOutClick = () => {
		setIsSignOutOpen(true);
	};

	const handleCloseModal = () => {
		setIsSignOutOpen(false);
	};

	useEffect(() => {
		if (isSuccess) {
			setIsSignOutOpen(false);
		}
	}, [isSuccess]);

	const handleConfirmSignOut = (data) => {
		dispatch(registerUser(data));

		console.log('User signed out', data.email);
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

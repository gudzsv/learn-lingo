import { NavLink, useNavigate } from 'react-router-dom';
import Icon from '../shared/Icon/Icon.jsx';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import { ModalRoot, ModalTemplate } from '../Modal/index.js';
import SignUpForm from '../Form/SignUpForm/SignUpForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
	loginUser,
	logoutUser,
	registerUser,
} from '../../redux/auth/operations.js';
import {
	selectIsAuthenticated,
	selectIsLoading,
} from '../../redux/auth/selectors.js';
import AuthButton from '../shared/Button/AuthButton/AuthButton.jsx';
import SignInForm from '../Form/SignInForm/SignInForm.jsx';

const activeClass = ({ isActive }) => (isActive ? styles.active : styles.link);

// const isAuthenticated = true;

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const [isSignOutOpen, setIsSignOutOpen] = useState(false);
	const [isLogInOpen, setIsLogInOpen] = useState(false);
	// const [isLogInOpen, setIsLogOutOpen] = useState(false);

	const isAuthenticated = useSelector(selectIsAuthenticated);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			setIsSignOutOpen(false);
			navigate('teachers');
		}
	}, [isAuthenticated]);

	const handleSignOutClick = () => {
		setIsSignOutOpen(true);
	};

	const handleLogInClick = () => {
		setIsLogInOpen(true);
	};

	const handleCloseModal = () => {
		setIsSignOutOpen(false);
		setIsLogInOpen(false);
	};

	const handleLogOut = () => {
		dispatch(logoutUser());
	};

	const handleConfirmLogIn = (data) => {
		dispatch(loginUser(data));
	};

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
				{isAuthenticated ? (
					<AuthButton
						onClick={handleLogOut}
						label={'Log Out'}
						icon={'log-out'}
						style={'logOutBtn'}
						type={'button'}
					/>
				) : (
					<>
						<AuthButton
							onClick={handleLogInClick}
							label={'Log in'}
							icon={'login'}
							style={'logInBtn'}
							type={'button'}
						/>
						<button
							type='button'
							className={styles.registrationBtn}
							aria-label='Register'
							onClick={handleSignOutClick}
						>
							Registration
						</button>
					</>
				)}
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
				isSuccess={isAuthenticated}
			>
				<ModalTemplate
					title={'Registration'}
					message={
						'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'
					}
					isLoading={isLoading}
				>
					<SignUpForm onSubmit={handleConfirmSignOut} />
				</ModalTemplate>
			</ModalRoot>

			<ModalRoot
				isOpen={isLogInOpen}
				onClose={handleCloseModal}
				isSuccess={isAuthenticated}
			>
				<ModalTemplate
					title='Log In'
					message='Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'
					isLoading={isLoading}
				>
					<SignInForm onSubmit={handleConfirmLogIn} />
				</ModalTemplate>
			</ModalRoot>
		</header>
	);
};

export default Header;

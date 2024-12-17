import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthControls from '../Shared/AuthControls/AuthControls.jsx';
import BurgerBtn from '../Shared/Button/BurgerBtn/BurgerBtn.jsx';
import Logo from '../Shared/Logo/Logo.jsx';
import Navigation from '../Shared/Navigation/Navigation.jsx';
import MobileMenu from './MobileMenu/MobileMenu.jsx';
import ModalManager from './ModalManager/ModalManager.jsx';

import styles from './Header.module.scss';

import {
	loginUser,
	logoutUser,
	registerUser,
} from '../../redux/auth/operations.js';
import {
	selectIsAuthenticated,
	selectIsLoading,
} from '../../redux/auth/selectors.js';

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [modalState, setModalState] = useState({ type: null, isOpen: false });

	const isAuthenticated = useSelector(selectIsAuthenticated);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			closeModal();
		}
	}, [isAuthenticated]);

	const toggleMenu = () => setIsOpenMenu((prev) => !prev);
	const openModal = (type) => setModalState({ type, isOpen: true });
	const closeModal = () => setModalState({ type: null, isOpen: false });

	const handleLogOut = () => dispatch(logoutUser());
	const handleConfirmLogIn = (data) => dispatch(loginUser(data));
	const handleConfirmSignUp = (data) => dispatch(registerUser(data));

	return (
		<header className={styles.header}>
			<div className={styles.navWrapper}>
				<Logo />
				<Navigation isAuthenticated={isAuthenticated} />
			</div>

			<AuthControls
				isAuthenticated={isAuthenticated}
				onLogOut={handleLogOut}
				onOpenModal={openModal}
			/>

			<BurgerBtn onClick={toggleMenu} />

			{isOpenMenu && (
				<MobileMenu
					isAuthenticated={isAuthenticated}
					isOpen={isOpenMenu}
					closeMenu={toggleMenu}
					handleLogOut={handleLogOut}
					openModal={openModal}
				/>
			)}

			<ModalManager
				modalState={modalState}
				isLoading={isLoading}
				isAuthenticated={isAuthenticated}
				onClose={closeModal}
				onLogIn={handleConfirmLogIn}
				onSignUp={handleConfirmSignUp}
			/>
		</header>
	);
};

export default Header;

import React, { useCallback, useEffect, useRef } from 'react';
import { MAX_MOBILE_WIDTH } from '../../../constants/constants.js';
import AuthControls from '../../Shared/AuthControls/AuthControls.jsx';
import CloseBtn from '../../Shared/Button/CloseBtn/CloseBtn.jsx';
import Logo from '../../Shared/Logo/Logo.jsx';
import Navigation from '../../Shared/Navigation/Navigation.jsx';
import styles from './MobileMenu.module.scss';

const MobileMenu = ({
	isOpen,
	closeMenu,
	handleLogOut,
	isAuthenticated,
	openModal,
}) => {
	const menuRef = useRef(null);

	const handleCloseMenu = useCallback(() => {
		if (isOpen) closeMenu();
	}, [isOpen, closeMenu]);

	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		const handleResize = () => {
			if (window.innerWidth > MAX_MOBILE_WIDTH) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		window.addEventListener('resize', handleResize);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			window.removeEventListener('resize', handleResize);
		};
	}, [isOpen, closeMenu]);

	return (
		<div className={styles.contextMenuBackdrop} role='presentation'>
			<div
				ref={menuRef}
				className={styles.contextMenu}
				role='dialog'
				aria-labelledby='mobileMenuLabel'
			>
				<Logo
					id='mobileMenuLabel'
					className={'logoAbsolute'}
					onClick={handleCloseMenu}
				/>
				<CloseBtn
					icon={'close'}
					aria-label='Close mobile menu'
					onClick={closeMenu}
					className={'closeBtn'}
				/>

				<AuthControls
					isOpen={isOpen}
					isAuthenticated={isAuthenticated}
					onLogOut={handleLogOut}
					onOpenModal={openModal}
				/>

				<hr className={styles.hr} />

				<Navigation
					isAuthenticated={isAuthenticated}
					isBurger={true}
					closeMenu={closeMenu}
				/>
			</div>
		</div>
	);
};

export default MobileMenu;

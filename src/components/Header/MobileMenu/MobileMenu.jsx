import React, { useEffect } from 'react';
import styles from './MobileMenu.module.scss';
import Logo from '../../Shared/Logo/Logo.jsx';
import CloseBtn from '../../Shared/Button/CloseBtn/CloseBtn.jsx';
import AuthControls from '../../Shared/AuthControls/AuthControls.jsx';
import Navigation from '../../Shared/Navigation/Navigation.jsx';

const maxMobileWidth = 425;

const MobileMenu = ({
	isOpen,
	closeMenu,
	handleLogOut,
	isAuthenticated,
	openModal,
}) => {
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > maxMobileWidth && isOpen) {
				closeMenu();
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isOpen, closeMenu]);

	return (
		<div className={styles.contextMenuBackdrop} role='presentation'>
			<div
				className={styles.contextMenu}
				role='dialog'
				aria-labelledby='mobileMenuLabel'
			>
				<Logo id='mobileMenuLabel' className={'logoAbsolute'} />
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

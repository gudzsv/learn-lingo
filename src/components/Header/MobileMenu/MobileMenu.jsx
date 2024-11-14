import React from 'react';
import styles from './MobileMenu.module.scss';
import Logo from '../../Logo/Logo.jsx';
import Icon from '../../Icon/Icon.jsx';

const MobileMenu = ({ closeMenu }) => {
	return (
		<div className={styles.contextMenuBackdrop}>
			<div className={styles.contextMenu}>
				<Logo />
				<button
					className={styles.closeBtn}
					type='button'
					aria-label='Close mobile menu'
					onClick={closeMenu}
				>
					<Icon iconName={'close'} width={18} height={18} />
				</button>
				<nav className={styles.contextNav}>
					<ul className={styles.contextNavList}>
						<li className={styles.contextListItem}>
							<a className={styles.contextListLink} href='./index.html'>
								Home
							</a>
						</li>
						<li className={styles.contextListItem}>
							<a
								className={styles.contextListLink}
								href='./index.html#benefits'
							>
								Benefits
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;

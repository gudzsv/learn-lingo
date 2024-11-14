import React from 'react';
import styles from './MobileMenu.module.scss';
import Logo from '../../Logo/Logo.jsx';
import Icon from '../../Icon/Icon.jsx';
import { NavLink } from 'react-router-dom';

const activeClass = ({ isActive }) => (isActive ? styles.active : styles.link);
let isAuthenticated = true;

const MobileMenu = ({ closeMenu }) => {
	return (
		<div className={styles.contextMenuBackdrop}>
			<div className={styles.contextMenu}>
				<Logo className={'logoAbsolute'} />
				<button
					className={styles.closeBtn}
					type='button'
					aria-label='Close mobile menu'
					onClick={closeMenu}
				>
					<Icon iconName={'close'} width={18} height={18} />
				</button>
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
		</div>
	);
};

export default MobileMenu;

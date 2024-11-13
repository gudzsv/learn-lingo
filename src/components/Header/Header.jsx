import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Header.module.scss';

const activeClass = ({ isActive }) => {
	return isActive ? styles.active : styles.link;
};

const isAuthenticated = true;

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.navWrapper}>
				<Link to='/' className={styles.logoLink} aria-label='Go to home page'>
					<Icon iconName='logo' width={28} height={28} />
					<span className={styles.logoText}>LearnLingo</span>
				</Link>
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
		</header>
	);
};

export default Header;

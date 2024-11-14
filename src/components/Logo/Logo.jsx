import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Logo.module.scss';

const Logo = React.memo(({ className = '', position }) => {
	return (
		<Link
			to='/'
			className={clsx(styles.logoLink, className)}
			aria-label='Go to home page'
		>
			<Icon iconName={'logoIcon'} width={18} height={18} className={'logo'} />
			<span className={styles.logoText}>LearnLingo</span>
		</Link>
	);
});

export default Logo;

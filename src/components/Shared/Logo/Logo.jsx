import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Logo.module.scss';

const Logo = React.memo(({ className = '', onClick }) => {
	return (
		<Link
			to='/'
			className={clsx(styles.logoLink, styles[className])}
			aria-label='Go to home page'
			onClick={onClick}
		>
			<Icon iconName={'logo'} width={18} height={18} className={'logoIcon'} />
			<span className={styles.logoText}>LearnLingo</span>
		</Link>
	);
});

export default Logo;

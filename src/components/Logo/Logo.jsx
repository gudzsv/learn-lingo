import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx'; // Доданий імпорт clsx
import Icon from '../shared/Icon/Icon.jsx';
import styles from './Logo.module.scss';

const Logo = React.memo(({ className = '' }) => {
	return (
		<Link
			to='/'
			className={clsx(styles.logoLink, styles[className])}
			aria-label='Go to home page'
		>
			<Icon iconName={'logo'} width={18} height={18} className={'logoIcon'} />
			<span className={styles.logoText}>LearnLingo</span>
		</Link>
	);
});

export default Logo;

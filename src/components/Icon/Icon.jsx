import sprite from '../../assets/icons/sprite.svg';
import React from 'react';
import clsx from 'clsx';
import styles from './Icon.module.css';

const Icon = React.memo(
	({
		iconName,
		width = 24,
		height = 24,
		className = '',
		ariaLabel = '',
		role = 'img',
		onClick,
		isActive = false,
		activeClassName = '',
	}) => {
		const handleClick = () => {
			if (onClick) {
				onClick();
			}
		};

		return (
			<svg
				className={clsx(styles.icon, className, {
					[styles.isActive]: isActive,
					[activeClassName]: isActive && activeClassName,
				})}
				width={width}
				height={height}
				role={role}
				aria-label={ariaLabel || iconName}
				onClick={handleClick}
			>
				<use href={`${sprite}#${iconName}`} />
			</svg>
		);
	}
);

Icon.displayName = 'Icon';

export default Icon;
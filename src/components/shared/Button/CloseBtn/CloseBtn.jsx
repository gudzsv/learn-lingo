import React from 'react';
import Icon from '../../Icon/Icon.jsx';
import styles from './CloseBtn.module.scss';

const CloseBtn = ({
	onClick,
	label,
	icon,
	ariaLabel,
	className = null,
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={styles[className]}
			aria-label={ariaLabel ? ariaLabel : label}
			onClick={onClick}
		>
			{icon && <Icon iconName={icon} width={20} height={20} />}
			{label}
		</button>
	);
};

export default CloseBtn;

import React from 'react';
import Icon from '../../Icon/Icon.jsx';
import styles from './AuthBtn.module.scss';

const AuthBtn = ({
	onClick,
	label,
	ariaLabel,
	icon,
	style = null,
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={styles[style]}
			aria-label={ariaLabel ? ariaLabel : label}
			onClick={onClick}
		>
			{icon && <Icon iconName={icon} width={20} height={20} />}
			{label}
		</button>
	);
};

export default AuthBtn;

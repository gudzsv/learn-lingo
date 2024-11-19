import React from 'react';
import Icon from '../../Icon/Icon.jsx';
import styles from './AuthButton.module.scss';

const AuthButton = ({
	onClick,
	label,
	icon,
	style = null,
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={styles[style]}
			aria-label={label}
			onClick={onClick}
		>
			{icon && <Icon iconName={icon} width={20} height={20} />}
			{label}
		</button>
	);
};

export default AuthButton;

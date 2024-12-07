import clsx from 'clsx';
import styles from './Button.module.scss';
import { useState } from 'react';

const Button = ({
	form = '',
	type = 'button',
	text = 'Click Me',
	onClick = () => {},
	isDisabled = false,
	className = '',
	ariaLabel = '',
	ariaPressed,
	isLoading,
}) => {
	// const [isLoading, setIsLoading] = useState(false);
	// const handleClick = () => {
	// 	console.log('CLICK', isLoading);

	// 	setIsLoading(true);
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 2000);
	// };
	return (
		<button
			form={form}
			type={type}
			// onClick={onClick}
			className={clsx(styles.button, styles[className], {
				[styles.disabled]: isDisabled,
				[styles.loading]: isLoading,
			})}
			disabled={isDisabled || isLoading}
			aria-label={ariaLabel}
			aria-pressed={ariaPressed}
		>
			{isLoading ? (
				<span className={styles.spinner} aria-hidden='true' />
			) : (
				text
			)}
		</button>
	);
};

export default Button;

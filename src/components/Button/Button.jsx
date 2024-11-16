import clsx from 'clsx';
import styles from './Button.module.scss';
import { useState } from 'react';

const Button = ({
	type = 'button',
	text = 'Click Me',
	onClick = () => {},
	isDisabled = false,
	className = '',
	// isLoading = false,
	ariaLabel = '',
	ariaPressed,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const handleClick = () => {
		console.log('CLICK', isLoading);

		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};
	return (
		<button
			type={type}
			onClick={handleClick}
			className={clsx(styles.button, className, {
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

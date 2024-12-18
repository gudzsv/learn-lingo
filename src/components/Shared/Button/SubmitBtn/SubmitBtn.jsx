import clsx from 'clsx';
import styles from './SubmitBtn.module.scss';

const SubmitBtn = ({
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
	return (
		<button
			form={form}
			type={type}
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

export default SubmitBtn;

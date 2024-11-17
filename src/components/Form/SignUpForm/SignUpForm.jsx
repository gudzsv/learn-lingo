import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Icon from '../../Icon/Icon.jsx';
import { signUpValidationSchema } from '../../../schemas/signUpValidationSchema.js';
import clsx from 'clsx';

import styles from './SignUpForm.module.scss';

const SignUpForm = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
		resolver: yupResolver(signUpValidationSchema),
	});

	return (
		<form
			id='signUpForm'
			className={styles.signUpForm}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={styles.signUpInputWrapper}>
				<input
					{...register('name')}
					placeholder={'Name'}
					className={clsx(styles.signUpInput, {
						[styles.errorInput]: errors.name,
					})}
					type='text'
					autoComplete='name'
					inputMode='text'
				/>
				{errors.name && (
					<div className={styles.error}>{errors.name.message}</div>
				)}
			</div>
			<div className={styles.signUpInputWrapper}>
				<input
					{...register('email')}
					placeholder={'Email'}
					className={clsx(styles.signUpInput, {
						[styles.errorInput]: errors.email,
					})}
					type='text'
					autoComplete='email'
					inputMode='email'
				/>
				{errors.email && (
					<div className={styles.error}>{errors.email.message}</div>
				)}
			</div>
			<div className={styles.signUpInputWrapper}>
				<input
					{...register('password')}
					placeholder={'Password'}
					className={clsx(styles.signUpInput, {
						[styles.errorInput]: errors.password,
					})}
					type='text'
					autoComplete='password'
					inputMode='password'
				/>
				<span className={styles.icon}>
					<Icon iconName={'eye-off'} role={'button'} />
				</span>
				{errors.password && (
					<div className={styles.error}>{errors.password.message}</div>
				)}
			</div>
		</form>
	);
};

export default SignUpForm;

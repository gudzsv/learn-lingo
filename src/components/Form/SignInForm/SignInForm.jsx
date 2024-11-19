import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Icon from '../../shared/Icon/Icon.jsx';
import { signUpValidationSchema } from '../../../schemas/signUpValidationSchema.js';
import clsx from 'clsx';
import { useToggleEye } from '../../../hooks/useToggleEye.js';
import SubmitBtn from '../../shared/Button/SubmitBtn/SubmitBtn.jsx';

import styles from './SignInForm.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/auth/selectors.js';

const SignInForm = ({ onSubmit }) => {
	const { isEyeOn, toggleEye } = useToggleEye();
	const isLoading = useSelector(selectIsLoading);

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
			id='signInForm'
			className={styles.signUpForm}
			onSubmit={handleSubmit(onSubmit)}
		>
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
					type={isEyeOn ? 'text' : 'password'}
					autoComplete='password'
				/>

				<span className={styles.icon}>
					<Icon
						onClick={toggleEye}
						iconName={isEyeOn ? 'eye' : 'eye-off'}
						role={'button'}
						width={20}
						height={20}
					/>
				</span>

				{errors.password && (
					<div className={styles.error}>{errors.password.message}</div>
				)}
			</div>
			<div className={styles.modalBtn}>
				<SubmitBtn
					form='signUpForm'
					type={'submit'}
					text='Sign Up'
					className={'modalBtn'}
					// onClick={onConfirm}
					isLoading={isLoading}
				/>
			</div>
		</form>
	);
};

export default SignInForm;
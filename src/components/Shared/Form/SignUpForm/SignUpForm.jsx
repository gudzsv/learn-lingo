import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useToggleEye } from '../../../../hooks/useToggleEye.js';
import { signUpValidationSchema } from '../../../../schemas/signUpValidationSchema.js';
import Icon from '../../Icon/Icon.jsx';

import { useSelector } from 'react-redux';
import {
	selectError,
	selectIsLoading,
} from '../../../../redux/auth/selectors.js';
import SubmitBtn from '../../Button/SubmitBtn/SubmitBtn.jsx';
import ErrorMessage from '../../ErrorMessage/ErrorMessage.jsx';
import styles from './SignUpForm.module.scss';

const SignUpForm = ({ onSubmit }) => {
	const { isEyeOn, toggleEye } = useToggleEye();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

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
			<div className={styles.formInputsWrapper}>
				<div className={styles.inputWrapper}>
					<input
						{...register('name')}
						placeholder={'Name'}
						className={clsx(styles.input, {
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
				<div className={styles.inputWrapper}>
					<input
						{...register('email')}
						placeholder={'Email'}
						className={clsx(styles.input, {
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
				<div className={styles.inputWrapper}>
					<input
						{...register('password')}
						placeholder={'Password'}
						className={clsx(styles.input, {
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
			</div>
			<div className={styles.modalBtn}>
				<SubmitBtn
					form='signUpForm'
					type={'submit'}
					text='Sign Up '
					className={'modalBtn'}
					isLoading={isLoading}
				/>
			</div>
			{error && <ErrorMessage message={error} />}
		</form>
	);
};

export default SignUpForm;

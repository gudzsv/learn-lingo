import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { REASONS } from '../../../../constants/constants.js';
import { bookTrialFormValidationSchema } from '../../../../schemas/bookTrialFormValidationSchema.js';
import Avatar from '../../Avatar/Avatar.jsx';
import Button from '../../Button/Button.jsx';
import styles from './BookTrialForm.module.scss';

const BookTrialForm = ({
	teacher,
	teacherFullName,
	onCloseModal,
	onNotify,
}) => {
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
			phone: '',
			reason: '',
		},
		resolver: yupResolver(bookTrialFormValidationSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
		onNotify(data);
		onCloseModal();
		reset();
	};

	return (
		<div className={styles.bookTrialForm}>
			<div className={styles.teacherInfo}>
				<Avatar
					src={teacher.avatar_url}
					alt={teacherFullName}
					className='bookAvatar'
				/>
				<p className={styles.teacherDetails}>
					<span className={styles.teacherLabel}>Your teacher</span>
					<span className={styles.teacherName}>{teacherFullName}</span>
				</p>
			</div>

			<form
				id='bookForm'
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<fieldset className={styles.formFieldset}>
					<legend className={styles.formLegend}>
						What is your main reason for learning English?
					</legend>

					<div className={styles.formRadioGroup}>
						{REASONS.map((option) => (
							<div key={option.id} className={styles.formRadioWrapper}>
								<input
									type='radio'
									id={option.id}
									{...register('reason', { required: true })}
									value={option.value}
									className={styles.formRadio}
								/>
								<label htmlFor={option.id} className={styles.formRadioLabel}>
									{option.label}
								</label>
							</div>
						))}
						{errors.reason && (
							<div id='reasonError' className='error'>
								{errors.reason.message}
							</div>
						)}
					</div>
				</fieldset>

				<div className={styles.formFields}>
					<div className={styles.inputWrapper}>
						<input
							{...register('name')}
							type='text'
							placeholder='Full Name'
							className={styles.input}
							aria-invalid={!!errors.name}
							aria-describedby={errors.name ? 'nameError' : undefined}
						/>
						{errors.name && (
							<div id='nameError' className='error'>
								{errors.name.message}
							</div>
						)}
					</div>

					<div className={styles.inputWrapper}>
						<input
							{...register('email')}
							type='email'
							placeholder='Email'
							className={styles.input}
							aria-invalid={!!errors.email}
							aria-describedby={errors.email ? 'emailError' : undefined}
						/>
						{errors.email && (
							<div id='emailError' className='error'>
								{errors.email.message}
							</div>
						)}
					</div>

					<div className={styles.inputWrapper}>
						<input
							{...register('phone')}
							type='tel'
							placeholder='Phone number'
							className={styles.input}
							aria-invalid={!!errors.phone}
							aria-describedby={errors.phone ? 'phoneError' : undefined}
						/>
						{errors.phone && (
							<div id='phoneError' className='error'>
								{errors.phone.message}
							</div>
						)}
					</div>
				</div>

				<Button
					form={'bookForm'}
					type={'submit'}
					text='Book'
					className='bookFormBtn'
				/>
			</form>
		</div>
	);
};

export default BookTrialForm;

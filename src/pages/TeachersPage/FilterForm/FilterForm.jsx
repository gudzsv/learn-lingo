import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styles from './FilterForm.module.scss';
// import Select from 'react-select/base';

const FilterForm = () => {
	const dispatch = useDispatch();

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Отримуємо значення поля price
	const selectedPrice = watch('price');

	const onSubmit = (data) => {
		// dispatch(submitForm(data));
	};

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.selectWrapper}>
				<label htmlFor='language' className={styles.label}>
					Languages
				</label>
				<select
					id='language'
					className={styles.select}
					{...register('language', { required: 'Language is required' })}
				>
					<option value='French' selected>
						French
					</option>
					<option value='English'>English</option>
					<option value='German'>German</option>
					<option value='Ukrainian'>Ukrainian</option>
					<option value='Polish'>Polish</option>
				</select>
				{errors.language && (
					<span className={styles.error}>{errors.language.message}</span>
				)}
			</div>

			{/* Level of knowledge Select */}
			<div className={styles.selectWrapper}>
				<label htmlFor='level' className={styles.label}>
					Level of knowledge
				</label>
				<select
					id='level'
					className={styles.select}
					{...register('level', { required: 'Level is required' })}
				>
					<option value='A1 Beginner' selected>
						A1 Beginner
					</option>
					<option value='A2 Elementary'>A2 Elementary</option>
					<option value='B1 Intermediate'>B1 Intermediate</option>
					<option value='B2 Upper-Intermediate'>B2 Upper-Intermediate</option>
				</select>
				{errors.level && (
					<span className={styles.error}>{errors.level.message}</span>
				)}
			</div>

			{/* Price Select */}
			<div className={`${styles.selectWrapper} ${styles.priceWrapper}`}>
				<label htmlFor='price' className={styles.label}>
					Price
				</label>
				<div className={styles.selectContainer}>
					<select
						id='price'
						className={`${styles.select} ${styles.priceSelect}`}
						{...register('price', { required: 'Price is required' })}
					>
						<option value='10' selected>
							10
						</option>
						<option value='20'>20</option>
						<option value='30'>30</option>
						<option value='40'>40</option>
					</select>
					<span className={styles.dollarSign}>$</span>
				</div>
				{errors.price && (
					<span className={styles.error}>{errors.price.message}</span>
				)}
			</div>

			<button type='submit' className={styles.submitBtn}>
				Submit
			</button>
		</form>
	);
};

export default FilterForm;

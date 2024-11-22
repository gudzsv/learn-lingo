import styles from './FilterForm.module.scss';

const FilterForm = () => {
	return (
		<form id='filter-form' className={styles.filterForm}>
			<div className={styles.inputWrapper}>
				<label htmlFor='language' className={styles.filterFormLabel}>
					Languages
				</label>
				<select
					id='language'
					name='language'
					required
					className={styles.filterFormSelect}
				>
					<option value='' disabled defaultValue>
						Select...
					</option>
					<option value='French'>French</option>
					<option value='English'>English</option>
					<option value='German'>German</option>
					<option value='Ukrainian'>Ukrainian</option>
					<option value='Polish'>Polish</option>
				</select>
			</div>

			<div className={styles.inputWrapper}>
				<label htmlFor='level' className={styles.filterFormLabel}>
					Level of knowledge
				</label>
				<select
					id='level'
					name='level'
					required
					className={styles.filterFormSelect}
				>
					<option value='' disabled defaultValue>
						Select...
					</option>
					<option value='A1 Beginner'>A1 Beginner</option>
					<option value='A2 Elementary'>A2 Elementary</option>
					<option value='B1 Intermediate'>B1 Intermediate</option>
					<option value='B2 Upper-Intermediate'>B2 Upper-Intermediate</option>
				</select>
			</div>

			<div className={styles.inputWrapper}>
				<label htmlFor='price' className={styles.filterFormLabel}>
					Price
				</label>
				<select
					id='price'
					name='price'
					required
					className={styles.filterFormSelect}
				>
					<option value='' disabled defaultValue>
						Select...
					</option>
					<option value='10'>10 </option>
					<option value='20'>20</option>
					<option value='30'>30</option>
					<option value='40'>40</option>
				</select>
			</div>

			<button form={'filter-form'} type='submit'>
				Надіслати
			</button>
		</form>
	);
};

export default FilterForm;

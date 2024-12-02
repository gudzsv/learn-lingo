import React, { useState } from 'react';

import { DROPDOWNS } from '../../../constants/constants.js';
import styles from './FilterForm.module.scss';
import Dropdown from '../../../components/shared/Dropdown/Dropdown.jsx';
import { useForm } from 'react-hook-form';

const FilterForm = () => {
	const defaultValues = DROPDOWNS.reduce((acc, dropdown) => {
		acc[dropdown.id] = dropdown.items[0];
		return acc;
	}, {});

	const { register, setValue, watch, handleSubmit } = useForm({
		defaultValues,
	});
	const [activeDropdownId, setActiveDropdownId] = useState('');

	const onSubmit = (data) => {
		console.log('Form data:', data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.dropdownContainer}
		>
			{DROPDOWNS.map((dropdown) => (
				<Dropdown
					key={dropdown.id}
					id={dropdown.id}
					label={dropdown.label}
					items={dropdown.items}
					activeDropdownId={activeDropdownId}
					setActiveDropdownId={setActiveDropdownId}
					value={watch(dropdown.id)} // Слідкуємо за значенням
					setValue={setValue} // Оновлюємо значення в формі
					register={register} // Регіструємо поле у формі
				/>
			))}
			<button type='submit'>Submit</button>
		</form>
	);
};

export default FilterForm;

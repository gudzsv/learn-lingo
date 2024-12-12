import React, { useState } from 'react';
import { DROPDOWNS } from '../../../constants/constants.js';
import styles from './FilterForm.module.scss';
import Dropdown from '../../Shared/Dropdown/Dropdown.jsx';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/teachers/selectors.js';

const FilterForm = () => {
	const filter = useSelector(selectFilters);
	// const dispatch = useDispatch();
	// const defaultValues = DROPDOWNS.reduce((acc, dropdown) => {
	// 	acc[dropdown.id] = dropdown.items[0];
	// 	return acc;
	// }, {});

	// const { register, setValue, watch, handleSubmit } = useForm(filter);

	const [activeDropdownId, setActiveDropdownId] = useState('');
	console.log('activeDropdownId: ', activeDropdownId);

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			// onSubmit={handleSubmit(onSubmit)}
			// onKeyDown={handleKeyPress}
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
					// value={watch(dropdown.id)}
					// setValue={setValue}
					// register={register}
				/>
			))}
		</form>
	);
};

export default FilterForm;

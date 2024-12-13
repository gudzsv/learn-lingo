import React, { useState } from 'react';
import { DROPDOWNS } from '../../../constants/constants.js';
import styles from './FilterForm.module.scss';
import Dropdown from '../../Shared/Dropdown/Dropdown.jsx';

const FilterForm = () => {
	const [activeDropdownId, setActiveDropdownId] = useState('');

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
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
				/>
			))}
		</form>
	);
};

export default FilterForm;

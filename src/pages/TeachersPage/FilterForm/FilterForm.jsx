import React, { useState } from 'react';

import { DROPDOWNS } from '../../../constants/constants.js';
import styles from './FilterForm.module.scss';
import Dropdown from '../../../components/shared/Dropdown/Dropdown.jsx';

const FilterForm = () => {
	const [activeDropdownId, setActiveDropdownId] = useState('');

	return (
		<div className={styles.dropdownContainer}>
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
		</div>
	);
};

export default FilterForm;

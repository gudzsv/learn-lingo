import React, { useState } from 'react';
import styles from './LanguageLevels.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	selectLanguageLevel,
} from '../../../redux/teachers/selectors.js';
import { setFilter, setLanguageLevel } from '../../../redux/teachers/slice.js';

const LanguageLevels = ({ levels, groupName }) => {
	const filter = useSelector(selectFilters);
	const [selectedLevel, setSelectedLevel] = useState('');
	const languageLevel = useSelector(selectLanguageLevel);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		// setSelectedLevel(event.target.value);
		// dispatch(setLanguageLevel(event.target.value));
		dispatch(setFilter({ ...filter, levels: event.target.value }));
		console.log('event.target.value: ', event.target.value);
	};

	return (
		<fieldset className={styles.radioGroup}>
			<legend className='visuallyHidden'>Select your language level</legend>
			<ul className={styles.radioList}>
				{levels.map((level, idx) => (
					<li key={idx} className={styles.radioItem}>
						<input
							type='radio'
							name={groupName}
							value={level}
							id={`${groupName}-level-${idx}`}
							checked={filter.levels === level}
							onChange={handleChange}
							className={styles.radioInput}
						/>
						<label
							htmlFor={`${groupName}-level-${idx}`}
							className={styles.radioLabel}
						>
							{`# ${level}`}
						</label>
					</li>
				))}
			</ul>
		</fieldset>
	);
};

export default LanguageLevels;

import React, { useMemo } from 'react';
import styles from './LanguageLevels.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/teachers/selectors.js';
import { setFilter } from '../../../redux/teachers/slice.js';

const LanguageLevels = React.memo(({ levels, groupName }) => {
	const filter = useSelector(selectFilters);

	const dispatch = useDispatch();

	const levelsList = useMemo(() => levels, [levels]);

	const handleChange = (event) => {
		dispatch(setFilter({ ...filter, levels: event.target.value }));
	};

	return (
		<fieldset className={styles.radioGroup}>
			<legend className='visuallyHidden'>Select your language level</legend>
			<ul className={styles.radioList}>
				{levelsList.map((level, idx) => (
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
});

export default LanguageLevels;

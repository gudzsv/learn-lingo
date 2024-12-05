import React, { useState } from 'react';
import styles from './LanguageLevels.module.scss';

const LanguageLevels = ({ levels }) => {
	const [selectedLevel, setSelectedLevel] = useState('');

	const handleChange = (event) => {
		setSelectedLevel(event.target.value);
		console.log('event.target.value): ', event.target.checked);
	};

	return (
		<fieldset className={styles.radioGroup}>
			<legend className='visuallyHidden'>Select your language level</legend>
			<ul className={styles.radioList}>
				{levels.map((level, idx) => (
					<li key={idx} className={styles.radioItem}>
						<input
							type='radio'
							name='languageLevel'
							value={level}
							id={`level-${idx}`}
							checked={selectedLevel === level}
							onChange={handleChange}
							className={styles.radioInput}
						/>
						<label htmlFor={`level-${idx}`} className={styles.radioLabel}>
							{`# ${level}`}
						</label>
					</li>
				))}
			</ul>
		</fieldset>
	);
};

export default LanguageLevels;

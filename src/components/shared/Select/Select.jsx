import React from 'react';

const Select = () => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor='language' className={styles.filterFormLabel}>
				Languages
			</label>
			<div className={styles.selectWrapper}>
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
				<Icon iconName='arrow-down' className={'arrowIcon'} />
			</div>
		</div>
	);
};

export default Select;

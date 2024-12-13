import React from 'react';
import clsx from 'clsx';
import styles from './TeacherInfoList.module.scss';

const TeacherInfoList = React.memo(({ teacher }) => {
	const infoItems = [
		{
			label: 'Speaks:',
			value: teacher.languages.length
				? teacher.languages.join(', ')
				: 'Not specified',
		},
		{
			label: 'Lesson Info:',
			value: teacher.lesson_info || 'No information provided',
		},
		{
			label: 'Conditions:',
			value: teacher.conditions.length
				? teacher.conditions.join(' ')
				: 'Not specified',
		},
	];

	return (
		<ul className={styles.basicInfoList}>
			{infoItems.map(({ label, value }) => (
				<li key={`${label}-${value}`} className={styles.basicInfoItem}>
					<span className={styles.infoHeading}>{label}</span>
					<p
						className={clsx(styles.infoText, {
							[styles.infoTextLang]: label === 'Speaks:',
						})}
					>
						{value}
					</p>
				</li>
			))}
		</ul>
	);
});

export default TeacherInfoList;

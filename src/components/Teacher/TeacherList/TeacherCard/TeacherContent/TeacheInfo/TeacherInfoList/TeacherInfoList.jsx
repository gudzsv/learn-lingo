import clsx from 'clsx';
import styles from './TeacherInfoList.module.scss';

const TeacherInfoList = ({ teacher }) => {
	const infoItems = [
		{ label: 'Speaks:', value: teacher.languages.join(', ') },
		{ label: 'Lesson Info:', value: teacher.lesson_info },
		{ label: 'Conditions:', value: teacher.conditions.join(' ') },
	];

	return (
		<ul className={styles.basicInfoList}>
			{infoItems.map(({ label, value }, index) => (
				<li key={index} className={styles.basicInfoItem}>
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
};

export default TeacherInfoList;

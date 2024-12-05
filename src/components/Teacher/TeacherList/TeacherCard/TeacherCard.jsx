import React, { useState } from 'react';
import styles from './TeacherCard.module.scss';
import TeacherAvatar from './TeacherAvatar/TeacherAvatar.jsx';
import TeacherContent from './TeacherContent/TeacherContent.jsx';
// import TeacherName from './TeacherContent/TeacherHeader/TeacherName/TeacherName.jsx';
// import TeacherDetails from './TeacherContent/TeacherHeader/TeacherDetails/TeacherDetails.jsx';
// import clsx from 'clsx';
// import Reviews from '../Reviews/Reviews';
// import TeacherInfo from './TeacherContent/TeacheInfo/TeacherInfoList/TeacherInfoList.jsx';
// import ReadMore from '../Button/ReadMoreBtn/ReadMoreBtn.jsx';
// import LanguageLevels from '../LanguageLevel/LanguageLevels.jsx';
// import Button from '../Button/Button.jsx';

const TeacherCard = ({ teacher }) => {
	const teacherFullName = teacher.name + ' ' + teacher.surname;

	// const [isHidden, setIsHidden] = useState(true);

	// const handleReadMore = () => {
	// 	setIsHidden((prev) => !prev);
	// };

	return (
		<section className={styles.teacherProfile}>
			<TeacherAvatar
				avatarUrl={teacher.avatar_url}
				fullName={teacherFullName}
			/>
			<TeacherContent teacher={teacher} />
			{/* <div className={styles.teacherHeaderWrapper}>
				<header className={styles.teacherHeader}>
					<TeacherName fullName={teacherFullName} />
					<TeacherDetails teacher={teacher} />
				</header>
				<div className={styles.teacherInfoWrapper}>
					<TeacherInfo teacher={teacher} isHidden={isHidden} />

					<div className={styles.teacherExperienceWrapper}>
						{!isHidden ? (
							<p
								className={clsx(styles.experience, {
									[styles.visible]: !isHidden,
									[styles.hidden]: isHidden,
								})}
							>
								{teacher.experience}
							</p>
						) : (
							<ReadMore handleReadMore={handleReadMore} />
						)}
					</div>
				</div>

				{!isHidden && (
					<Reviews
						reviews={teacher.reviews}
						className={clsx({
							['visible']: !isHidden,
							['hidden']: isHidden,
						})}
					/>
				)}

				<LanguageLevels levels={teacher.levels} />

				{!isHidden && <Button text={'Book trial lesson'} />}
			</div> */}
		</section>
	);
};

export default TeacherCard;

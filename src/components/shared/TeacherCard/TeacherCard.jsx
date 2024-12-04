import React, { useState } from 'react';
import styles from './TeacherCard.module.scss';
import Avatar from '../Avatar/Avatar.jsx';
import StatusBadge from '../StatusBadge/StatusBadge.jsx';
import Icon from '../Icon/Icon.jsx';
import TeacherAvatar from './TeacherAvatar/TeacherAvatar.jsx';
import TeacherName from './TeacherName/TeacherName.jsx';
import TeacherDetails from './TeacherDetails/TeacherDetails.jsx';
import clsx from 'clsx';
import Reviews from '../Reviews/Reviews';
import TeacherInfo from './TeacherInfo/TeacherInfo.jsx';

const TeacherCard = ({ teacher }) => {
	console.log('teachers: ', teacher);
	const teacherFullName = teacher.name + ' ' + teacher.surname;

	const [isHidden, setIsHidden] = useState(true);

	const handleReadMore = () => {
		setIsHidden((prev) => !prev);
	};
	return (
		<section className={styles.teacherProfile}>
			<TeacherAvatar
				avatarUrl={teacher.avatar_url}
				fullName={teacherFullName}
			/>
			<div className={styles.teacherHeaderWrapper}>
				<header className={styles.teacherHeader}>
					<TeacherName fullName={teacherFullName} />
					<TeacherDetails teacher={teacher} />
				</header>
				<div className={styles.teacherInfoWrapper}>
					<TeacherInfo teacher={teacher} isHidden={isHidden} />
					<p
						className={clsx(styles.experience, {
							[styles.visible]: !isHidden,
							[styles.hidden]: isHidden,
						})}
					>
						{teacher.experience}
					</p>
				</div>

				<Reviews
					reviews={teacher.reviews}
					className={clsx({
						['visible']: !isHidden,
						['hidden']: isHidden,
					})}
				/>
			</div>

			<button type='button' onClick={handleReadMore}>
				ReadMore
			</button>

			{/* <!-- Skill Levels --> */}

			{/* <!-- Call to Action --> */}
			{/* <section
					<h2 id='cta-title' className={styles.visuallyHidden}>
						Book a Trial Lesson
					</h2>
					<button type='button' className={styles.btnBook}>
						Book trial lesson
					</button>
				</section> */}
		</section>
	);
};

export default TeacherCard;

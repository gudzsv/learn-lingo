import React from 'react';
import styles from './TeacherCard.module.scss';

const TeacherCard = ({ teachers }) => {
	console.log('teachers: ', teachers);
	return (
		<section aria-labelledby='tutor-name' className={styles.tutorProfile}>
			{/* <!-- Header with basic info --> */}
			<header>
				<div className={styles.tutorHeader}>
					<img
						src={teachers[0].avatar_url}
						alt='Portrait of Jane Smith'
						className={styles.tutorPhoto}
					/>
					<div>
						<h1 id='tutor-name'>Jane Smith</h1>
						<p>
							<strong>Speaks:</strong>
							<a href='#' lang='de'>
								German
							</a>
							,
							<a href='#' lang='fr'>
								French
							</a>
						</p>
						<p>
							<strong>Lessons done:</strong> 1098
						</p>
						<p>
							<strong>Rating:</strong> 4.8
						</p>
						<p>
							<strong>Price:</strong> 30$/hour
						</p>
					</div>
				</div>
			</header>

			{/* <!-- Lesson info --> */}
			<section aria-labelledby='lesson-info-title'>
				<h2 id='lesson-info-title'>Lesson Info</h2>
				<p>
					Lessons are structured to cover grammar, vocabulary, and practical
					usage of the language.
				</p>
			</section>

			{/* <!-- Conditions --> */}
			<section aria-labelledby='conditions-title'>
				<h2 id='conditions-title'>Conditions</h2>
				<p>
					Welcomes both adult learners and teenagers (13 years and above).
					Provides personalized study plans.
				</p>
			</section>

			{/* <!-- Bio --> */}
			<section aria-labelledby='about-tutor'>
				<h2 id='about-tutor'>About Jane</h2>
				<p>
					Jane is an experienced and dedicated language teacher specializing in
					German and French. She holds a Bachelor's degree in German Studies and
					a Master's degree in French Literature. Her passion for languages and
					teaching has driven her to become a highly proficient and
					knowledgeable instructor. With over 10 years of teaching experience,
					Jane has helped numerous students of various backgrounds and
					proficiency levels achieve their language learning goals. She is
					skilled at adapting her teaching methods to suit the needs and
					learning styles of her students, ensuring that they feel supported and
					motivated throughout their language journey.
				</p>
			</section>

			{/* <!-- Reviews --> */}
			<section aria-labelledby='reviews-title'>
				<h2 id='reviews-title'>Student Reviews</h2>
				<ul className={styles.reviewsList}>
					<li>
						<p>
							<strong>Frank</strong>
							<span aria-label='4 stars'>⭐️⭐️⭐️⭐️</span>
						</p>
						<p>Jane's lessons were very helpful. I made good progress.</p>
					</li>
					<li>
						<p>
							<strong>Eve</strong>
							<span aria-label='5 stars'>⭐️⭐️⭐️⭐️⭐️</span>
						</p>
						<p>Jane is an amazing teacher! She is patient and supportive.</p>
					</li>
				</ul>
			</section>

			{/* <!-- Skill Levels --> */}
			<section aria-labelledby='skill-levels-title'>
				<h2 id='skill-levels-title'>Skill Levels</h2>
				<ul className={styles.skillLevels}>
					<li>#A1 Beginner</li>
					<li>#A2 Elementary</li>
					<li>#B1 Intermediate</li>
					<li>#B2 Upper-Intermediate</li>
				</ul>
			</section>

			{/* <!-- Call to Action --> */}
			<section aria-labelledby='cta-title'>
				<h2 id='cta-title' className={styles.visuallyHidden}>
					Book a Trial Lesson
				</h2>
				<button type='button' className={styles.btnBook}>
					Book trial lesson
				</button>
			</section>
		</section>
	);
};

export default TeacherCard;

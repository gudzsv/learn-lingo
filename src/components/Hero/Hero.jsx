import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.heroWrapper}>
			<div className={styles.heroContentWrapper}>
				<h1 className={styles.heroHeading}>
					Unlock your potential with the best{' '}
					<span className={styles.textDecoration}>language</span> tutors
				</h1>
				<p className={styles.heroText}>
					Embark on an Exciting Language Journey with Expert Language Tutors:
					Elevate your language proficiency to new heights by connecting with
					highly qualified and experienced tutors.
				</p>
				<Link
					className={styles.heroLink}
					to='teachers'
					aria-label='Start your language learning journey'
				>
					Get started
				</Link>
			</div>
			<div className={styles.heroImageWrapper}>
				<picture>
					<source
						srcSet='
							image@1x.webp 1x,
							image@2x.webp 2x'
						type='image/webp'
					/>
					<img
						src='image@1x.jpg'
						alt='Motivational image of a person learning languages'
						width='600'
						height='400'
						loading='lazy'
					/>
				</picture>
			</div>
		</section>
	);
};

export default Hero;

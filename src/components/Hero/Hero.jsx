import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import Icon from '../Shared/Icon/Icon.jsx';
import LaptopImg from './LaptopImg/LaptopImg.jsx';

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
				<picture className={styles.heroPictureFace}>
					<source
						srcSet='
							/src/assets/img/hero/face/face_1x.webp 1x,
							/src/assets/img/hero/face/face_2x.webp 2x'
						type='image/webp'
					/>
					<img
						src='/src/assets/img/hero/face/face_1x.webp'
						alt='Motivational image of a person learning languages'
						width='339'
						height='339'
						loading='lazy'
					/>
				</picture>

				<LaptopImg />
			</div>
		</section>
	);
};

export default Hero;

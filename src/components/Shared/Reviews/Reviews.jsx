import Icon from '../Icon/Icon.js';
import styles from './Reviews.module.scss';
import blankAvatar from '../../../assets/img/reviews/blank_avatar1.png';
import Avatar from '../Avatar/Avatar.jsx';
import clsx from 'clsx';

const Reviews = ({ reviews, className }) => {
	if (!reviews || reviews.length === 0) {
		return <p className={styles.noReviews}>No reviews available.</p>;
	}

	return (
		<ul className={clsx(styles.reviewsList, styles[className])}>
			{reviews.map((review, idx) => (
				<li key={idx} className={styles.reviewItem}>
					<div className={styles.reviewContent}>
						<Avatar
							src={review?.avatar || blankAvatar}
							alt={review.reviewer_name}
							withBorder={false}
							className={'reviewPhoto'}
						/>
						<div className={styles.reviewerInfo}>
							<span
								className={styles.reviewerName}
								aria-label={`Reviewer: ${review.reviewer_name}`}
							>
								{review.reviewer_name}
							</span>
							<div className={styles.ratingWrapper}>
								<Icon
									iconName='star'
									className={styles.ratingIcon}
									width={16}
									height={16}
								/>
								<span className={styles.ratingValue} aria-label='rating'>
									{review.reviewer_rating.toFixed(1)}
								</span>
							</div>
						</div>
					</div>

					<p className={styles.reviewComment}>{review.comment}</p>
				</li>
			))}
		</ul>
	);
};

export default Reviews;

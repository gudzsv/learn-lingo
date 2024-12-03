import React from 'react';
import styles from './Avatar.module.scss';
const Avatar = ({ src, alt, withBorder = false }) => {
	return (
		<div
			className={`${styles.teacherPhotoWrapper} ${
				withBorder ? styles.teacherPhotoBorder : ''
			}`}
			role='presentation'
		>
			<img
				src={src}
				alt={`Portrait of ${alt}`}
				className={styles.teacherPhoto}
				loading='lazy'
			/>
		</div>
	);
};

export default Avatar;

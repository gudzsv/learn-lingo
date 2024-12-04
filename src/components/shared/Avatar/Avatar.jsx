import React from 'react';
import styles from './Avatar.module.scss';
const Avatar = ({ src, alt, width, height, withBorder = false, style }) => {
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
				width={width}
				height={height}
				style={style}
				loading='lazy'
			/>
		</div>
	);
};

export default Avatar;

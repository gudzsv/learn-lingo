import React from 'react';
import styles from './Avatar.module.scss';
import clsx from 'clsx';
const Avatar = ({
	src,
	alt,
	width,
	height,
	withBorder = false,
	style,
	className,
}) => {
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
				className={clsx(styles.teacherPhoto, styles[className])}
				width={width}
				height={height}
				style={style}
				loading='lazy'
			/>
		</div>
	);
};

export default Avatar;

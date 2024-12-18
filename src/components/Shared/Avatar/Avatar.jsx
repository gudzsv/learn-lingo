import clsx from 'clsx';
import { memo } from 'react';
import styles from './Avatar.module.scss';
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
			className={clsx(styles.teacherPhotoWrapper, {
				[styles.teacherPhotoBorder]: withBorder,
			})}
			role='presentation'
			aria-hidden='true'
		>
			<img
				src={src}
				alt={alt ? `Portrait of ${alt}` : 'Avatar image'}
				className={clsx(styles.teacherPhoto, styles[className])}
				width={width}
				height={height}
				style={style}
				loading='lazy'
			/>
		</div>
	);
};

export default memo(Avatar);

import Icon from '../../../../../../../Shared/Icon/Icon.jsx';
import styles from './DetailsItem.module.scss';
const DetailsItem = ({
	icon,
	title,
	value,
	className,
	iconWidth,
	iconHeight,
}) => (
	<div className={styles.detailsItem}>
		<dt className={styles.detailsTitle}>
			{icon && (
				<div className={styles.detailIcon}>
					<Icon
						iconName={icon}
						width={iconWidth}
						height={iconHeight}
						aria-hidden='true'
					/>
				</div>
			)}
			{title && <span>{title}</span>}
		</dt>
		<dd className={`${styles.detailsValue} ${className || ''}`}>{value}</dd>
	</div>
);

export default DetailsItem;

import Avatar from '../../../../Shared/Avatar/Avatar.jsx';
import StatusBadge from '../../../../Shared/StatusBadge/StatusBadge';
import styles from './TeacherAvatar.module.scss';

const TeacherAvatar = ({
	avatarUrl = '',
	fullName = 'Unknown',
	isActive = true,
}) => {
	return (
		<div className={styles.avatarWrapper}>
			<Avatar src={avatarUrl} alt={fullName} withBorder={true} />
			<StatusBadge isActive={isActive} />
		</div>
	);
};

export default TeacherAvatar;
